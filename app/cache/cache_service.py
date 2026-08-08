import json
import redis
from redis.exceptions import ConnectionError

from app.cache.redis_client import redis_client


def get_cache_key(flag_key: str, user_id: str, environment: str):
    return f"{flag_key}:{user_id}:{environment}"


def get_cached_result(flag_key: str, user_id: str, environment: str):
    key = get_cache_key(flag_key, user_id, environment)

    try:
        data = redis_client.get(key)

        if data is None:
            return None

        if isinstance(data, bytes):
            data = data.decode("utf-8")

        return json.loads(data)

    except ConnectionError:
        print("⚠ Redis not running. Skipping cache read.")
        return None

    except Exception as e:
        print(f"Cache Read Error: {e}")
        return None


def cache_result(flag_key: str, user_id: str, environment: str, result: dict):
    key = get_cache_key(flag_key, user_id, environment)

    try:
        redis_client.setex(
            key,
            300,          # Cache for 5 minutes
            json.dumps(result),
        )

    except ConnectionError:
        print("⚠ Redis not running. Skipping cache write.")

    except Exception as e:
        print(f"Cache Write Error: {e}")
import json

from app.cache.redis_client import redis_client

TTL = 300


def build_cache_key(
    flag_key: str,
    user_id: str,
    environment: str,
):
    return f"flag:{flag_key}:{user_id}:{environment}"


def get_cached_result(
    flag_key: str,
    user_id: str,
    environment: str,
):
    key = build_cache_key(
        flag_key,
        user_id,
        environment,
    )

    data = redis_client.get(key)

    if data:
        return json.loads(data)

    return None


def cache_result(
    flag_key: str,
    user_id: str,
    environment: str,
    result: dict,
):
    key = build_cache_key(
        flag_key,
        user_id,
        environment,
    )

    redis_client.setex(
        key,
        TTL,
        json.dumps(result),
    )


def clear_flag_cache(
    flag_key: str,
):
    pattern = f"flag:{flag_key}:*"

    keys = redis_client.keys(pattern)

    if keys:
        redis_client.delete(*keys)
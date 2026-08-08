import hashlib


def build_cache_key(
    flag_key: str,
    user_id: str,
    environment: str,
):
    """
    Generate a unique cache key.
    """
    return f"{flag_key}:{user_id}:{environment}"


def hash_user(user_id: str):
    """
    Generate a stable hash value for rollout calculations.
    """
    return int(
        hashlib.md5(
            user_id.encode()
        ).hexdigest(),
        16,
    ) % 100
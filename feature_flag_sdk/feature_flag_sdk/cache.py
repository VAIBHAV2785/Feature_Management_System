from cachetools import TTLCache

from feature_flag_sdk.config import SDKConfig


cache = TTLCache(
    maxsize=1000,
    ttl=SDKConfig.CACHE_TTL,
)


def get(key):
    """
    Retrieve a value from cache.
    Returns None if the key is missing or expired.
    """
    return cache.get(key)


def set(key, value):
    """
    Store a value in cache.
    """
    cache[key] = value


def delete(key):
    """
    Remove a specific key from cache.
    """
    cache.pop(key, None)


def clear():
    """
    Clear the entire cache.
    """
    cache.clear()
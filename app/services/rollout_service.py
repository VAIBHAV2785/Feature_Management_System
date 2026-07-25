import hashlib


# ----------------------------------------
# Generate a stable bucket (0-99)
# ----------------------------------------
def get_bucket(user_id: str, flag_key: str) -> int:
    """
    Generates a deterministic bucket between 0 and 99.
    The same user + flag always produces the same bucket.
    """

    value = f"{user_id}:{flag_key}"

    hash_value = hashlib.sha256(
        value.encode("utf-8")
    ).hexdigest()

    number = int(hash_value, 16)

    bucket = number % 100

    return bucket


# ----------------------------------------
# Check rollout eligibility
# ----------------------------------------
def is_user_in_rollout(
    user_id: str,
    flag_key: str,
    rollout_percentage: int,
):
    bucket = get_bucket(
        user_id,
        flag_key,
    )

    enabled = bucket < rollout_percentage

    return {
        "enabled": enabled,
        "bucket": bucket,
        "rollout": rollout_percentage,
    }
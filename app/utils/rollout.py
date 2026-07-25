import hashlib


def get_bucket(user_id: str, flag_key: str) -> int:
    value = f"{user_id}:{flag_key}"

    hash_value = hashlib.sha256(
        value.encode("utf-8")
    ).hexdigest()

    number = int(hash_value, 16)

    return number % 100


def is_user_in_rollout(
    user_id: str,
    flag_key: str,
    rollout_percentage: int,
):
    bucket = get_bucket(user_id, flag_key)

    return {
        "enabled": bucket < rollout_percentage,
        "bucket": bucket,
        "rollout": rollout_percentage,
    }
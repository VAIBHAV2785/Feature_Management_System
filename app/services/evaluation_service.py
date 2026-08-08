from fastapi import HTTPException
from sqlalchemy.orm import Session
<<<<<<< HEAD
from sqlalchemy import func
=======
>>>>>>> bcd60838 (MILESTONE 2)

from app.models.feature_flag import FeatureFlag
from app.models.environment import Environment
from app.models.environment_override import EnvironmentOverride
from app.models.targeting_rule import TargetingRule
from app.models.user import User

from app.utils.rollout import get_bucket

from app.cache.cache_service import (
    get_cached_result,
    cache_result,
)

<<<<<<< HEAD
from app.services.evaluation_log_service import create_evaluation_log

=======
>>>>>>> bcd60838 (MILESTONE 2)

def evaluate_flag(
    db: Session,
    flag_key: str,
    environment_name: str,
    user_id: str,
):

    # -------------------------
    # Check Redis Cache
    # -------------------------
    cached = get_cached_result(
        flag_key,
        user_id,
        environment_name,
    )

    if cached:
        cached["source"] = "redis"
        return cached

    # -------------------------
    # Find Feature Flag
    # -------------------------
    flag = (
        db.query(FeatureFlag)
        .filter(FeatureFlag.key == flag_key)
        .first()
    )

    if not flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found",
        )

    # -------------------------
    # Flag Disabled
    # -------------------------
    if not flag.enabled:

        result = {
            "flag_key": flag.key,
            "enabled": False,
            "bucket": -1,
            "rollout_percentage": flag.rollout_percentage,
            "reason": "flag_disabled",
        }

        cache_result(
            flag.key,
            user_id,
            environment_name,
            result,
        )

<<<<<<< HEAD
        create_evaluation_log(
            db=db,
            flag_id=flag.id,
            user_id=user_id,
            environment=environment_name,
            result=False,
        )

=======
>>>>>>> bcd60838 (MILESTONE 2)
        return result

    # -------------------------
    # Find Environment
    # -------------------------
    environment = (
        db.query(Environment)
<<<<<<< HEAD
        .filter(
            func.lower(Environment.name)
            == environment_name.lower()
        )
=======
        .filter(Environment.name == environment_name)
>>>>>>> bcd60838 (MILESTONE 2)
        .first()
    )

    if not environment:
        raise HTTPException(
            status_code=404,
            detail="Environment not found",
        )

    # -------------------------
    # Environment Override
    # -------------------------
    override = (
        db.query(EnvironmentOverride)
        .filter(
            EnvironmentOverride.flag_id == flag.id,
            EnvironmentOverride.environment_id == environment.id,
        )
        .first()
    )

    if override:

        enabled = str(override.value).lower() == "true"

        result = {
            "flag_key": flag.key,
            "enabled": enabled,
            "bucket": -1,
            "rollout_percentage": flag.rollout_percentage,
            "reason": "environment_override",
        }

        cache_result(
            flag.key,
            user_id,
            environment_name,
            result,
        )

<<<<<<< HEAD
        create_evaluation_log(
            db=db,
            flag_id=flag.id,
            user_id=user_id,
            environment=environment_name,
            result=enabled,
        )

=======
>>>>>>> bcd60838 (MILESTONE 2)
        return result

    # -------------------------
    # User Targeting
    # -------------------------
    user_rule = (
        db.query(TargetingRule)
        .filter(
            TargetingRule.flag_id == flag.id,
            TargetingRule.rule_type == "user",
            TargetingRule.rule_value == user_id,
        )
        .first()
    )

    if user_rule:

        result = {
            "flag_key": flag.key,
            "enabled": True,
            "bucket": -1,
            "rollout_percentage": flag.rollout_percentage,
            "reason": "user_targeting",
        }

        cache_result(
            flag.key,
            user_id,
            environment_name,
            result,
        )

<<<<<<< HEAD
        create_evaluation_log(
            db=db,
            flag_id=flag.id,
            user_id=user_id,
            environment=environment_name,
            result=True,
        )

=======
>>>>>>> bcd60838 (MILESTONE 2)
        return result

    # -------------------------
    # Group Targeting
    # -------------------------
    user = (
        db.query(User)
        .filter(User.username == user_id)
        .first()
    )

    if user and user.group:

        group_rule = (
            db.query(TargetingRule)
            .filter(
                TargetingRule.flag_id == flag.id,
                TargetingRule.rule_type == "group",
                TargetingRule.rule_value == user.group.group_name,
            )
            .first()
        )

        if group_rule:

            result = {
                "flag_key": flag.key,
                "enabled": True,
                "bucket": -1,
                "rollout_percentage": flag.rollout_percentage,
                "reason": "group_targeting",
            }

            cache_result(
                flag.key,
                user_id,
                environment_name,
                result,
            )

<<<<<<< HEAD
            create_evaluation_log(
                db=db,
                flag_id=flag.id,
                user_id=user_id,
                environment=environment_name,
                result=True,
            )

=======
>>>>>>> bcd60838 (MILESTONE 2)
            return result

    # -------------------------
    # Percentage Rollout
    # -------------------------
    bucket = get_bucket(
        user_id,
        flag.key,
    )

    enabled = bucket < flag.rollout_percentage

    result = {
        "flag_key": flag.key,
        "enabled": enabled,
        "bucket": bucket,
        "rollout_percentage": flag.rollout_percentage,
        "reason": "percentage_rollout",
    }

    cache_result(
        flag.key,
        user_id,
        environment_name,
        result,
    )

<<<<<<< HEAD
    create_evaluation_log(
        db=db,
        flag_id=flag.id,
        user_id=user_id,
        environment=environment_name,
        result=enabled,
    )

=======
>>>>>>> bcd60838 (MILESTONE 2)
    return result
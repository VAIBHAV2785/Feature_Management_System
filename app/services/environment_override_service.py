from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.environment_override import EnvironmentOverride
from app.models.feature_flag import FeatureFlag
from app.models.environment import Environment

from app.schemas.environment_override import EnvironmentOverrideCreate


def create_override(
    db: Session,
    override: EnvironmentOverrideCreate,
):

    new_override = EnvironmentOverride(
        flag_id=override.flag_id,
        environment_id=override.environment_id,
        value=override.value,
    )

    db.add(new_override)
    db.commit()
    db.refresh(new_override)

    return get_override(db, new_override.id)


def get_all_overrides(db: Session):

    overrides = db.query(EnvironmentOverride).all()

    result = []

    for override in overrides:

        flag = (
            db.query(FeatureFlag)
            .filter(FeatureFlag.id == override.flag_id)
            .first()
        )

        environment = (
            db.query(Environment)
            .filter(Environment.id == override.environment_id)
            .first()
        )

        result.append({
            "id": override.id,
            "flag_id": override.flag_id,
            "environment_id": override.environment_id,
            "flag_name": flag.key if flag else "",
            "environment_name": environment.name if environment else "",
            "value": override.value,
        })

    return result


def get_override(
    db: Session,
    override_id: int,
):

    override = (
        db.query(EnvironmentOverride)
        .filter(EnvironmentOverride.id == override_id)
        .first()
    )

    if not override:
        raise HTTPException(
            status_code=404,
            detail="Override not found",
        )

    flag = (
        db.query(FeatureFlag)
        .filter(FeatureFlag.id == override.flag_id)
        .first()
    )

    environment = (
        db.query(Environment)
        .filter(Environment.id == override.environment_id)
        .first()
    )

    return {
        "id": override.id,
        "flag_id": override.flag_id,
        "environment_id": override.environment_id,
        "flag_name": flag.key if flag else "",
        "environment_name": environment.name if environment else "",
        "value": override.value,
    }


def update_override(
    db: Session,
    override_id: int,
    value: bool,
):

    override = (
        db.query(EnvironmentOverride)
        .filter(EnvironmentOverride.id == override_id)
        .first()
    )

    if not override:
        raise HTTPException(
            status_code=404,
            detail="Override not found",
        )

    override.value = value

    db.commit()
    db.refresh(override)

    return get_override(db, override.id)


def delete_override(
    db: Session,
    override_id: int,
):

    override = (
        db.query(EnvironmentOverride)
        .filter(EnvironmentOverride.id == override_id)
        .first()
    )

    if not override:
        raise HTTPException(
            status_code=404,
            detail="Override not found",
        )

    db.delete(override)
    db.commit()

    return {
        "message": "Override deleted successfully"
    }
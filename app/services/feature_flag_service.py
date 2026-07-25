from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.feature_flag import FeatureFlag


# ---------------------------------------
# Create Feature Flag
# ---------------------------------------
def create_feature_flag(
    db: Session,
    key: str,
    description: str,
    type: str,
    default_value: str,
    enabled: bool,
    owner_team: str,
    rollout_percentage: int,
):

    existing_flag = (
        db.query(FeatureFlag)
        .filter(FeatureFlag.key == key)
        .first()
    )

    if existing_flag:
        raise HTTPException(
            status_code=400,
            detail="Feature flag already exists",
        )

    feature_flag = FeatureFlag(
        key=key,
        description=description,
        type=type,
        default_value=default_value,
        enabled=enabled,
        owner_team=owner_team,
        rollout_percentage=rollout_percentage,
    )

    db.add(feature_flag)
    db.commit()
    db.refresh(feature_flag)

    return feature_flag


# ---------------------------------------
# Get All Feature Flags
# ---------------------------------------
def get_all_feature_flags(db: Session):

    return db.query(FeatureFlag).all()


# ---------------------------------------
# Get Single Feature Flag
# ---------------------------------------
def get_feature_flag_by_id(
    db: Session,
    flag_id: int,
):

    feature_flag = (
        db.query(FeatureFlag)
        .filter(FeatureFlag.id == flag_id)
        .first()
    )

    if feature_flag is None:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found",
        )

    return feature_flag


# ---------------------------------------
# Update Feature Flag
# ---------------------------------------
def update_feature_flag(
    db: Session,
    flag_id: int,
    key: str,
    description: str,
    type: str,
    default_value: str,
    enabled: bool,
    owner_team: str,
    rollout_percentage: int,
):

    feature_flag = (
        db.query(FeatureFlag)
        .filter(FeatureFlag.id == flag_id)
        .first()
    )

    if feature_flag is None:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found",
        )

    feature_flag.key = key
    feature_flag.description = description
    feature_flag.type = type
    feature_flag.default_value = default_value
    feature_flag.enabled = enabled
    feature_flag.owner_team = owner_team
    feature_flag.rollout_percentage = rollout_percentage

    db.commit()
    db.refresh(feature_flag)

    return feature_flag


# ---------------------------------------
# Delete Feature Flag
# ---------------------------------------
def delete_feature_flag(
    db: Session,
    flag_id: int,
):

    feature_flag = (
        db.query(FeatureFlag)
        .filter(FeatureFlag.id == flag_id)
        .first()
    )

    if feature_flag is None:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found",
        )

    db.delete(feature_flag)
    db.commit()

    return {
        "message": "Feature flag deleted successfully"
    }
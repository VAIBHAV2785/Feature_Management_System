<<<<<<< HEAD
from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.models.feature_flag import FeatureFlag
from app.schemas.feature_flag import (
    FeatureFlagCreate,
    FeatureFlagUpdate,
)

from app.services.audit_service import create_audit_log


# ==========================================
# Get All Feature Flags
# ==========================================

def get_feature_flags(db: Session):
=======
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
>>>>>>> bcd60838 (MILESTONE 2)

    return db.query(FeatureFlag).all()


<<<<<<< HEAD
# ==========================================
# Get Feature Flag By ID
# ==========================================

def get_feature_flag(
=======
# ---------------------------------------
# Get Single Feature Flag
# ---------------------------------------
def get_feature_flag_by_id(
>>>>>>> bcd60838 (MILESTONE 2)
    db: Session,
    flag_id: int,
):

<<<<<<< HEAD
    flag = (
=======
    feature_flag = (
>>>>>>> bcd60838 (MILESTONE 2)
        db.query(FeatureFlag)
        .filter(FeatureFlag.id == flag_id)
        .first()
    )

<<<<<<< HEAD
    if not flag:
        raise HTTPException(
            status_code=404,
            detail="Feature Flag not found",
        )

    return flag


# ==========================================
# Create Feature Flag
# ==========================================

def create_feature_flag(
    db: Session,
    feature_flag: FeatureFlagCreate,
):

    existing = (
        db.query(FeatureFlag)
        .filter(
            FeatureFlag.key == feature_flag.key
        )
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Feature key already exists",
        )

    db_flag = FeatureFlag(
        **feature_flag.model_dump()
    )

    db.add(db_flag)
    db.commit()
    db.refresh(db_flag)

    # Audit Log
    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Create Flag",
        flag_id=db_flag.id,
        old_state=None,
        new_state={
            "key": db_flag.key,
            "description": db_flag.description,
            "enabled": db_flag.enabled,
            "rollout_percentage": db_flag.rollout_percentage,
        },
    )

    return db_flag


# ==========================================
# Update Feature Flag
# ==========================================

def update_feature_flag(
    db: Session,
    flag_id: int,
    feature_flag: FeatureFlagUpdate,
):

    flag = get_feature_flag(
        db,
        flag_id,
    )

    old_state = {
        "key": flag.key,
        "description": flag.description,
        "type": flag.type,
        "default_value": flag.default_value,
        "enabled": flag.enabled,
        "owner_team": flag.owner_team,
        "rollout_percentage": flag.rollout_percentage,
    }

    update_data = feature_flag.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(flag, key, value)

    db.commit()
    db.refresh(flag)

    new_state = {
        "key": flag.key,
        "description": flag.description,
        "type": flag.type,
        "default_value": flag.default_value,
        "enabled": flag.enabled,
        "owner_team": flag.owner_team,
        "rollout_percentage": flag.rollout_percentage,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Update Flag",
        flag_id=flag.id,
        old_state=old_state,
        new_state=new_state,
    )

    return flag


# ==========================================
# Delete Feature Flag
# ==========================================

=======
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
>>>>>>> bcd60838 (MILESTONE 2)
def delete_feature_flag(
    db: Session,
    flag_id: int,
):

<<<<<<< HEAD
    flag = get_feature_flag(
        db,
        flag_id,
    )

    old_state = {
        "key": flag.key,
        "description": flag.description,
        "enabled": flag.enabled,
        "rollout_percentage": flag.rollout_percentage,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Delete Flag",
        flag_id=flag.id,
        old_state=old_state,
        new_state=None,
    )

    db.delete(flag)
    db.commit()

    return {
        "message": "Feature Flag deleted successfully"
=======
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
>>>>>>> bcd60838 (MILESTONE 2)
    }
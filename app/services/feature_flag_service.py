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

    return db.query(FeatureFlag).all()


# ==========================================
# Get Feature Flag By ID
# ==========================================

def get_feature_flag(
    db: Session,
    flag_id: int,
):

    flag = (
        db.query(FeatureFlag)
        .filter(FeatureFlag.id == flag_id)
        .first()
    )

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

def delete_feature_flag(
    db: Session,
    flag_id: int,
):

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
    }
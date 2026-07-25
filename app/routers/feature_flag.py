from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.feature_flag import (
    FeatureFlagCreate,
    FeatureFlagUpdate,
    FeatureFlagResponse,
)

from app.services.feature_flag_service import (
    create_feature_flag,
    get_all_feature_flags,
    get_feature_flag_by_id,
    update_feature_flag,
    delete_feature_flag,
)

router = APIRouter(
    prefix="/flags",
    tags=["Feature Flags"],
)


# ---------------------------------------
# Create Feature Flag
# ---------------------------------------
@router.post(
    "/",
    response_model=FeatureFlagResponse,
)
def create_feature_flag_api(
    feature_flag: FeatureFlagCreate,
    db: Session = Depends(get_db),
):

    return create_feature_flag(
        db,
        feature_flag.key,
        feature_flag.description,
        feature_flag.type,
        feature_flag.default_value,
        feature_flag.enabled,
        feature_flag.owner_team,
        feature_flag.rollout_percentage,
    )


# ---------------------------------------
# Get All Feature Flags
# ---------------------------------------
@router.get(
    "/",
    response_model=list[FeatureFlagResponse],
)
def list_feature_flags(
    db: Session = Depends(get_db),
):

    return get_all_feature_flags(db)


# ---------------------------------------
# Get Single Feature Flag
# ---------------------------------------
@router.get(
    "/{flag_id}",
    response_model=FeatureFlagResponse,
)
def get_feature_flag(
    flag_id: int,
    db: Session = Depends(get_db),
):

    return get_feature_flag_by_id(
        db,
        flag_id,
    )


# ---------------------------------------
# Update Feature Flag
# ---------------------------------------
@router.put(
    "/{flag_id}",
    response_model=FeatureFlagResponse,
)
def update_feature_flag_api(
    flag_id: int,
    feature_flag: FeatureFlagUpdate,
    db: Session = Depends(get_db),
):

    return update_feature_flag(
        db,
        flag_id,
        feature_flag.key,
        feature_flag.description,
        feature_flag.type,
        feature_flag.default_value,
        feature_flag.enabled,
        feature_flag.owner_team,
        feature_flag.rollout_percentage,
    )


# ---------------------------------------
# Delete Feature Flag
# ---------------------------------------
@router.delete("/{flag_id}")
def delete_feature_flag_api(
    flag_id: int,
    db: Session = Depends(get_db),
):

    return delete_feature_flag(
        db,
        flag_id,
    )
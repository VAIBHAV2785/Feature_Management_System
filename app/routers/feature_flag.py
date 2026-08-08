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
<<<<<<< HEAD
    get_feature_flags,
    get_feature_flag,
=======
    get_all_feature_flags,
    get_feature_flag_by_id,
>>>>>>> bcd60838 (MILESTONE 2)
    update_feature_flag,
    delete_feature_flag,
)

router = APIRouter(
    prefix="/flags",
    tags=["Feature Flags"],
)


<<<<<<< HEAD
=======
# ---------------------------------------
# Create Feature Flag
# ---------------------------------------
>>>>>>> bcd60838 (MILESTONE 2)
@router.post(
    "/",
    response_model=FeatureFlagResponse,
)
<<<<<<< HEAD
def create_flag(
    feature_flag: FeatureFlagCreate,
    db: Session = Depends(get_db),
):
    return create_feature_flag(
        db,
        feature_flag,
    )


=======
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
>>>>>>> bcd60838 (MILESTONE 2)
@router.get(
    "/",
    response_model=list[FeatureFlagResponse],
)
<<<<<<< HEAD
def get_flags(
    db: Session = Depends(get_db),
):
    return get_feature_flags(db)


=======
def list_feature_flags(
    db: Session = Depends(get_db),
):

    return get_all_feature_flags(db)


# ---------------------------------------
# Get Single Feature Flag
# ---------------------------------------
>>>>>>> bcd60838 (MILESTONE 2)
@router.get(
    "/{flag_id}",
    response_model=FeatureFlagResponse,
)
<<<<<<< HEAD
def get_flag(
    flag_id: int,
    db: Session = Depends(get_db),
):
    return get_feature_flag(
=======
def get_feature_flag(
    flag_id: int,
    db: Session = Depends(get_db),
):

    return get_feature_flag_by_id(
>>>>>>> bcd60838 (MILESTONE 2)
        db,
        flag_id,
    )


<<<<<<< HEAD
=======
# ---------------------------------------
# Update Feature Flag
# ---------------------------------------
>>>>>>> bcd60838 (MILESTONE 2)
@router.put(
    "/{flag_id}",
    response_model=FeatureFlagResponse,
)
<<<<<<< HEAD
def update_flag(
=======
def update_feature_flag_api(
>>>>>>> bcd60838 (MILESTONE 2)
    flag_id: int,
    feature_flag: FeatureFlagUpdate,
    db: Session = Depends(get_db),
):
<<<<<<< HEAD
    return update_feature_flag(
        db,
        flag_id,
        feature_flag,
    )


@router.delete("/{flag_id}")
def delete_flag(
    flag_id: int,
    db: Session = Depends(get_db),
):
=======

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

>>>>>>> bcd60838 (MILESTONE 2)
    return delete_feature_flag(
        db,
        flag_id,
    )
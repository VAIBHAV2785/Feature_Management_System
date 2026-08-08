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
    get_feature_flags,
    get_feature_flag,
    update_feature_flag,
    delete_feature_flag,
)

router = APIRouter(
    prefix="/flags",
    tags=["Feature Flags"],
)


@router.post(
    "/",
    response_model=FeatureFlagResponse,
)
def create_flag(
    feature_flag: FeatureFlagCreate,
    db: Session = Depends(get_db),
):
    return create_feature_flag(
        db,
        feature_flag,
    )


@router.get(
    "/",
    response_model=list[FeatureFlagResponse],
)
def get_flags(
    db: Session = Depends(get_db),
):
    return get_feature_flags(db)


@router.get(
    "/{flag_id}",
    response_model=FeatureFlagResponse,
)
def get_flag(
    flag_id: int,
    db: Session = Depends(get_db),
):
    return get_feature_flag(
        db,
        flag_id,
    )


@router.put(
    "/{flag_id}",
    response_model=FeatureFlagResponse,
)
def update_flag(
    flag_id: int,
    feature_flag: FeatureFlagUpdate,
    db: Session = Depends(get_db),
):
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
    return delete_feature_flag(
        db,
        flag_id,
    )
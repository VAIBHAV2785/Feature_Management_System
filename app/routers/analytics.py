from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.services.analytics_service import (
    get_dashboard_statistics,
    get_flag_evaluations,
    get_environment_usage,
)

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


# ==========================================
# Dashboard Summary
# ==========================================
@router.get("/")
def dashboard_statistics(
    db: Session = Depends(get_db),
):
    return get_dashboard_statistics(db)


# ==========================================
# Feature Evaluation Counts
# ==========================================
@router.get("/evaluations")
def feature_evaluations(
    db: Session = Depends(get_db),
):
    return get_flag_evaluations(db)


# ==========================================
# Environment Usage
# ==========================================
@router.get("/environment-usage")
def environment_usage(
    db: Session = Depends(get_db),
):
    return get_environment_usage(db)
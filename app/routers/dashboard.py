from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.dashboard import (
    DashboardStats,
    SystemStatus,
)

from app.services.dashboard_service import (
    get_dashboard_stats,
    get_recent_activity,
    get_system_status,
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get(
    "/stats",
    response_model=DashboardStats,
)
def stats(
    db: Session = Depends(get_db),
):
    return get_dashboard_stats(db)


@router.get("/recent-activity")
def activity(
    db: Session = Depends(get_db),
):
    return get_recent_activity(db)


@router.get(
    "/system-status",
    response_model=SystemStatus,
)
def status():
    return get_system_status()
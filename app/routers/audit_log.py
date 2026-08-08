from datetime import datetime
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.audit_log import AuditLogResponse
from app.services.audit_service import (
    get_audit_logs,
    get_audit_log_by_id,
)

router = APIRouter(
    prefix="/audit-logs",
    tags=["Audit Logs"],
)


# -----------------------------------
# Get All Audit Logs
# -----------------------------------
@router.get(
    "/",
    response_model=list[AuditLogResponse],
)
def get_logs(
    user: Optional[str] = None,
    action: Optional[str] = None,
    flag_id: Optional[int] = None,
    start_date: Optional[datetime] = None,
    end_date: Optional[datetime] = None,
    db: Session = Depends(get_db),
):

    return get_audit_logs(
        db=db,
        user=user,
        action=action,
        flag_id=flag_id,
        start_date=start_date,
        end_date=end_date,
    )


# -----------------------------------
# Get Audit Log By ID
# -----------------------------------
@router.get(
    "/{audit_id}",
    response_model=AuditLogResponse,
)
def get_log(
    audit_id: int,
    db: Session = Depends(get_db),
):

    log = get_audit_log_by_id(
        db=db,
        audit_id=audit_id,
    )

    if not log:
        raise HTTPException(
            status_code=404,
            detail="Audit log not found",
        )

    return log
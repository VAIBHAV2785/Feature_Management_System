from datetime import datetime

from sqlalchemy.orm import Session

from app.models.audit_log import AuditLog


# ============================================
# Create Audit Log
# ============================================

def create_audit_log(
    db: Session,
    performed_by: str,
    action: str,
    flag_id: int | None = None,
    environment_id: int | None = None,
    old_state: dict | None = None,
    new_state: dict | None = None,
):

    audit = AuditLog(
        performed_by=performed_by,
        action=action,
        flag_id=flag_id,
        environment_id=environment_id,
        old_state=old_state,
        new_state=new_state,
    )

    db.add(audit)
    db.commit()
    db.refresh(audit)

    return audit


# ============================================
# Get All Audit Logs
# ============================================

def get_audit_logs(
    db: Session,
    user: str | None = None,
    action: str | None = None,
    flag_id: int | None = None,
    start_date: datetime | None = None,
    end_date: datetime | None = None,
):

    query = db.query(AuditLog)

    if user:
        query = query.filter(
            AuditLog.performed_by == user
        )

    if action:
        query = query.filter(
            AuditLog.action == action
        )

    if flag_id:
        query = query.filter(
            AuditLog.flag_id == flag_id
        )

    if start_date:
        query = query.filter(
            AuditLog.timestamp >= start_date
        )

    if end_date:
        query = query.filter(
            AuditLog.timestamp <= end_date
        )

    return (
        query.order_by(
            AuditLog.timestamp.desc()
        )
        .all()
    )


# ============================================
# Get Audit Log By ID
# ============================================

def get_audit_log_by_id(
    db: Session,
    audit_id: int,
):

    return (
        db.query(AuditLog)
        .filter(
            AuditLog.id == audit_id
        )
        .first()
    )


# ============================================
# Delete Audit Log
# ============================================

def delete_audit_log(
    db: Session,
    audit_id: int,
):

    audit = (
        db.query(AuditLog)
        .filter(
            AuditLog.id == audit_id
        )
        .first()
    )

    if not audit:
        return None

    db.delete(audit)
    db.commit()

    return {
        "message": "Audit log deleted successfully"
    }
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.feature_flag import FeatureFlag
from app.models.evaluation_log import EvaluationLog
from app.models.audit_log import AuditLog


# ==========================================
# Dashboard Statistics
# ==========================================
def get_dashboard_statistics(db: Session):

    total_flags = db.query(FeatureFlag).count()

    active_flags = (
        db.query(FeatureFlag)
        .filter(FeatureFlag.enabled == True)
        .count()
    )

    total_evaluations = (
        db.query(EvaluationLog)
        .count()
    )

    audit_logs = (
        db.query(AuditLog)
        .count()
    )

    return {
        "total_flags": total_flags,
        "active_flags": active_flags,
        "total_evaluations": total_evaluations,
        "audit_logs": audit_logs,
    }


# ==========================================
# Evaluation Count Per Flag
# ==========================================
def get_flag_evaluations(db: Session):

    data = (
        db.query(
            FeatureFlag.key,
            func.count(EvaluationLog.id).label("count"),
        )
        .join(
            EvaluationLog,
            FeatureFlag.id == EvaluationLog.flag_id,
        )
        .group_by(FeatureFlag.key)
        .all()
    )

    return [
        {
            "flag": row.key,
            "count": row.count,
        }
        for row in data
    ]


# ==========================================
# Environment Usage
# ==========================================
def get_environment_usage(db: Session):

    data = (
        db.query(
            EvaluationLog.environment,
            func.count(EvaluationLog.id).label("count"),
        )
        .group_by(EvaluationLog.environment)
        .all()
    )

    return [
        {
            "environment": row.environment,
            "count": row.count,
        }
        for row in data
    ]
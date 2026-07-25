from sqlalchemy.orm import Session

from app.models.feature_flag import FeatureFlag
from app.models.environment import Environment
from app.models.environment_override import EnvironmentOverride
from app.models.user_group import UserGroup
from app.models.user import User
from app.models.targeting_rule import TargetingRule
from app.models.audit_log import AuditLog


def get_dashboard_stats(db: Session):

    return {

        "feature_flags": db.query(FeatureFlag).count(),

        "environments": db.query(Environment).count(),

        "overrides": db.query(EnvironmentOverride).count(),

        "user_groups": db.query(UserGroup).count(),

        "users": db.query(User).count(),

        "targeting_rules": db.query(TargetingRule).count(),

    }


def get_recent_activity(db: Session):

    return (
        db.query(AuditLog)
        .order_by(AuditLog.timestamp.desc())
        .limit(10)
        .all()
    )


def get_system_status():

    return {
        "api": "Running",
        "database": "Connected",
    }
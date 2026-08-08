from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.targeting_rule import TargetingRule
from app.models.feature_flag import FeatureFlag

<<<<<<< HEAD
from app.services.audit_service import create_audit_log


# ===================================================
# Create Rule
# ===================================================
=======

# ------------------------
# Create Rule
# ------------------------
>>>>>>> bcd60838 (MILESTONE 2)
def create_rule(
    db: Session,
    flag_id: int,
    rule_type: str,
    rule_value: str
):

<<<<<<< HEAD
    flag = (
        db.query(FeatureFlag)
        .filter(FeatureFlag.id == flag_id)
        .first()
    )
=======
    flag = db.query(FeatureFlag).filter(
        FeatureFlag.id == flag_id
    ).first()
>>>>>>> bcd60838 (MILESTONE 2)

    if not flag:
        raise HTTPException(
            status_code=404,
            detail="Feature Flag not found"
        )

    rule = TargetingRule(
        flag_id=flag_id,
        rule_type=rule_type,
        rule_value=rule_value
    )

    db.add(rule)
    db.commit()
    db.refresh(rule)

<<<<<<< HEAD
    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Create Targeting Rule",
        flag_id=flag.id,
        old_state=None,
        new_state={
            "rule_type": rule.rule_type,
            "rule_value": rule.rule_value,
        },
    )

    return rule


# ===================================================
# Get Rules
# ===================================================
=======
    return rule


# ------------------------
# Get Rules
# ------------------------
>>>>>>> bcd60838 (MILESTONE 2)
def get_rules(db: Session):
    return db.query(TargetingRule).all()


<<<<<<< HEAD
# ===================================================
# Update Rule (NEW)
# ===================================================
def update_rule(
    db: Session,
    rule_id: int,
    rule_type: str,
    rule_value: str,
):

    rule = (
        db.query(TargetingRule)
        .filter(TargetingRule.id == rule_id)
        .first()
    )

    if not rule:
        raise HTTPException(
            status_code=404,
            detail="Rule not found"
        )

    old_state = {
        "rule_type": rule.rule_type,
        "rule_value": rule.rule_value,
    }

    rule.rule_type = rule_type
    rule.rule_value = rule_value

    db.commit()
    db.refresh(rule)

    new_state = {
        "rule_type": rule.rule_type,
        "rule_value": rule.rule_value,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Update Targeting Rule",
        flag_id=rule.flag_id,
        old_state=old_state,
        new_state=new_state,
    )

    return rule


# ===================================================
# Delete Rule
# ===================================================
=======
# ------------------------
# Delete Rule
# ------------------------
>>>>>>> bcd60838 (MILESTONE 2)
def delete_rule(
    db: Session,
    rule_id: int
):

<<<<<<< HEAD
    rule = (
        db.query(TargetingRule)
        .filter(TargetingRule.id == rule_id)
        .first()
    )
=======
    rule = db.query(TargetingRule).filter(
        TargetingRule.id == rule_id
    ).first()
>>>>>>> bcd60838 (MILESTONE 2)

    if not rule:
        raise HTTPException(
            status_code=404,
            detail="Rule not found"
        )

<<<<<<< HEAD
    old_state = {
        "rule_type": rule.rule_type,
        "rule_value": rule.rule_value,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Delete Targeting Rule",
        flag_id=rule.flag_id,
        old_state=old_state,
        new_state=None,
    )

=======
>>>>>>> bcd60838 (MILESTONE 2)
    db.delete(rule)
    db.commit()

    return {
        "message": "Rule deleted successfully"
    }
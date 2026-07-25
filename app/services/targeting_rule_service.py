from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.targeting_rule import TargetingRule
from app.models.feature_flag import FeatureFlag


# ------------------------
# Create Rule
# ------------------------
def create_rule(
    db: Session,
    flag_id: int,
    rule_type: str,
    rule_value: str
):

    flag = db.query(FeatureFlag).filter(
        FeatureFlag.id == flag_id
    ).first()

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

    return rule


# ------------------------
# Get Rules
# ------------------------
def get_rules(db: Session):
    return db.query(TargetingRule).all()


# ------------------------
# Delete Rule
# ------------------------
def delete_rule(
    db: Session,
    rule_id: int
):

    rule = db.query(TargetingRule).filter(
        TargetingRule.id == rule_id
    ).first()

    if not rule:
        raise HTTPException(
            status_code=404,
            detail="Rule not found"
        )

    db.delete(rule)
    db.commit()

    return {
        "message": "Rule deleted successfully"
    }
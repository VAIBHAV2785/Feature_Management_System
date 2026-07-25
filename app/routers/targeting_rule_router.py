from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.targeting_rule import (
    TargetingRuleCreate,
    TargetingRuleResponse,
)

from app.services.targeting_rule_service import (
    create_rule,
    get_rules,
    delete_rule,
)

router = APIRouter(
    prefix="/targeting-rules",
    tags=["Targeting Rules"]
)


# Create Rule
@router.post(
    "/",
    response_model=TargetingRuleResponse
)
def create(
    rule: TargetingRuleCreate,
    db: Session = Depends(get_db)
):
    return create_rule(
        db,
        rule.flag_id,
        rule.rule_type,
        rule.rule_value
    )


# Get All Rules
@router.get(
    "/",
    response_model=list[TargetingRuleResponse]
)
def list_rules(
    db: Session = Depends(get_db)
):
    return get_rules(db)


# Delete Rule
@router.delete("/{rule_id}")
def delete(
    rule_id: int,
    db: Session = Depends(get_db)
):
    return delete_rule(
        db,
        rule_id
    )
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.evaluation import (
    EvaluationRequest,
    EvaluationResponse,
)

from app.services.evaluation_service import (
    evaluate_flag,
)

router = APIRouter(
    prefix="/evaluate",
    tags=["Evaluation"],
)


@router.post(
    "/",
    response_model=EvaluationResponse,
)
def evaluate(
    request: EvaluationRequest,
    db: Session = Depends(get_db),
):

    return evaluate_flag(
        db,
        request.flag_key,
        request.environment,
        request.user_id,
    )
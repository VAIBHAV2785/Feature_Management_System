from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.evaluation import (
    EvaluationRequest,
    EvaluationResponse,
)

<<<<<<< HEAD
from app.services.evaluation_service import evaluate_flag
=======
from app.services.evaluation_service import (
    evaluate_flag,
)
>>>>>>> bcd60838 (MILESTONE 2)

router = APIRouter(
    prefix="/evaluate",
    tags=["Evaluation"],
)

<<<<<<< HEAD
@router.post("/", response_model=EvaluationResponse)
=======

@router.post(
    "/",
    response_model=EvaluationResponse,
)
>>>>>>> bcd60838 (MILESTONE 2)
def evaluate(
    request: EvaluationRequest,
    db: Session = Depends(get_db),
):
<<<<<<< HEAD
    print("===== REQUEST RECEIVED =====")
    print(request)
=======
>>>>>>> bcd60838 (MILESTONE 2)

    return evaluate_flag(
        db,
        request.flag_key,
        request.environment,
        request.user_id,
    )
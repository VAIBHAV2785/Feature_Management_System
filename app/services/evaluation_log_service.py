from sqlalchemy.orm import Session

from app.models.evaluation_log import EvaluationLog


def create_evaluation_log(
    db: Session,
    flag_id: int,
    user_id: str,
    environment: str,
    result: bool,
):

    log = EvaluationLog(
        flag_id=flag_id,
        user_id=user_id,
        environment=environment,
        result=result,
    )

    db.add(log)
    db.commit()
    db.refresh(log)

    return log  
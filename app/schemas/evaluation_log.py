from datetime import datetime

from pydantic import BaseModel


class EvaluationLogResponse(BaseModel):

    id: int

    flag_id: int

    user_id: str

    environment: str

    result: bool

    timestamp: datetime

    class Config:
        from_attributes = True
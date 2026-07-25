from pydantic import BaseModel


class EvaluationRequest(BaseModel):
    flag_key: str
    environment: str
    user_id: str


class EvaluationResponse(BaseModel):
    flag_key: str
    enabled: bool
    bucket: int
    rollout_percentage: int
    reason: str
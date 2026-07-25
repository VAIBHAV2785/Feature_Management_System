from pydantic import BaseModel


class FeatureFlagCreate(BaseModel):
    key: str
    description: str
    type: str
    default_value: str
    enabled: bool
    owner_team: str
    rollout_percentage: int = 100


class FeatureFlagUpdate(BaseModel):
    key: str
    description: str
    type: str
    default_value: str
    enabled: bool
    owner_team: str
    rollout_percentage: int


class FeatureFlagResponse(BaseModel):
    id: int
    key: str
    description: str
    type: str
    default_value: str
    enabled: bool
    owner_team: str
    rollout_percentage: int

    class Config:
        from_attributes = True
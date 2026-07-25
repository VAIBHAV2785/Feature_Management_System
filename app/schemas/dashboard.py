from pydantic import BaseModel


class DashboardStats(BaseModel):
    feature_flags: int
    environments: int
    overrides: int
    user_groups: int
    users: int
    targeting_rules: int


class SystemStatus(BaseModel):
    api: str
    database: str
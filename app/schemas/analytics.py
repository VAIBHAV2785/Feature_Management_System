from pydantic import BaseModel


class FlagAnalytics(BaseModel):

    flag: str
    count: int


class EnvironmentAnalytics(BaseModel):

    environment: str
    count: int


class DashboardSummary(BaseModel):

    total_flags: int
    active_flags: int
    total_evaluations: int
    audit_logs: int
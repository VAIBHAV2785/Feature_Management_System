
from pydantic import BaseModel


class EnvironmentCreate(BaseModel):
    name: str
    description: str


class EnvironmentResponse(BaseModel):
    id: int
    name: str
    description: str

    class Config:
        from_attributes = True
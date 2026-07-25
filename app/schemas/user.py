from typing import Optional

from pydantic import BaseModel, EmailStr


# Signup Request
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    group_id: Optional[int] = None


# Login Request
class UserLogin(BaseModel):
    email: EmailStr
    password: str


# Update User Group
class UserGroupUpdate(BaseModel):
    group_id: Optional[int] = None


# Response
class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr
    group_id: Optional[int]

    class Config:
        from_attributes = True
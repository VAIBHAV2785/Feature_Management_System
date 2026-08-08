from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.auth import (
    SignupRequest,
    LoginRequest,
)

from app.services.auth_service import (
    signup,
    login,
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/signup")
def signup_user(
    user: SignupRequest,
    db: Session = Depends(get_db),
):

    return signup(
        db,
        user,
    )


@router.post("/login")
def login_user(
    credentials: LoginRequest,
    db: Session = Depends(get_db),
):

    return login(
        db,
        credentials,
    )
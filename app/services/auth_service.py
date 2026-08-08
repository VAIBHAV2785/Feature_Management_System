from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.models.user import User

from app.schemas.auth import (
    SignupRequest,
    LoginRequest,
)

from app.utils.security import (
    hash_password,
    verify_password,
    create_access_token,
)


def signup(
    db: Session,
    user: SignupRequest,
):

    existing_username = (
        db.query(User)
        .filter(User.username == user.username)
        .first()
    )

    if existing_username:
        raise HTTPException(
            status_code=400,
            detail="Username already exists",
        )

    existing_email = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing_email:
        raise HTTPException(
            status_code=400,
            detail="Email already exists",
        )

    new_user = User(
        username=user.username,
        email=user.email,
        password=hash_password(user.password),
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User created successfully"
    }


def login(
    db: Session,
    credentials: LoginRequest,
):

    user = (
        db.query(User)
        .filter(User.username == credentials.username)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password",
        )

    if not verify_password(
        credentials.password,
        user.password,
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password",
        )

    token = create_access_token(
        {
            "sub": user.username,
            "id": user.id,
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
    }


def get_current_user(
    db: Session,
    username: str,
):

    user = (
        db.query(User)
        .filter(User.username == username)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    return user
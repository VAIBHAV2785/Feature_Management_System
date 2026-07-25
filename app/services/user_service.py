from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.user import User
from app.models.user_group import UserGroup

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)


# =====================================================
# Signup
# =====================================================
def signup(
    db: Session,
    username: str,
    email: str,
    password: str,
    group_id: int | None = None,
):
    existing_user = db.query(User).filter(
        User.email == email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered",
        )

    if group_id is not None:
        group = db.query(UserGroup).filter(
            UserGroup.id == group_id
        ).first()

        if group is None:
            raise HTTPException(
                status_code=404,
                detail="Group not found",
            )

    user = User(
        username=username,
        email=email,
        password=hash_password(password),
        group_id=group_id,
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


# =====================================================
# Login
# =====================================================
def login(
    db: Session,
    email: str,
    password: str,
):
    user = db.query(User).filter(
        User.email == email
    ).first()

    if user is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
        )

    if not verify_password(
        password,
        user.password,
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
        )

    token = create_access_token(
        {"sub": user.email}
    )

    return {
        "access_token": token,
        "token_type": "bearer",
    }


# =====================================================
# Get All Users
# =====================================================
def get_all_users(db: Session):
    return db.query(User).all()


# =====================================================
# Get User By ID
# =====================================================
def get_user(
    db: Session,
    user_id: int,
):
    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    return user


# =====================================================
# Update User
# =====================================================
def update_user(
    db: Session,
    user_id: int,
    username: str,
    email: str,
    group_id: int | None = None,
):
    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    if group_id is not None:
        group = db.query(UserGroup).filter(
            UserGroup.id == group_id
        ).first()

        if group is None:
            raise HTTPException(
                status_code=404,
                detail="Group not found",
            )

    user.username = username
    user.email = email
    user.group_id = group_id

    db.commit()
    db.refresh(user)

    return user


# =====================================================
# Delete User
# =====================================================
def delete_user(
    db: Session,
    user_id: int,
):
    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    db.delete(user)
    db.commit()

    return {
        "message": "User deleted successfully"
    }


# =====================================================
# Assign User To Group
# =====================================================
def assign_group(
    db: Session,
    user_id: int,
    group_id: int,
):
    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if user is None:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    group = db.query(UserGroup).filter(
        UserGroup.id == group_id
    ).first()

    if group is None:
        raise HTTPException(
            status_code=404,
            detail="Group not found",
        )

    user.group_id = group_id

    db.commit()
    db.refresh(user)

    return user
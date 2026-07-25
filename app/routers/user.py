from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.user import (
    UserCreate,
    UserLogin,
    UserResponse,
    UserGroupUpdate,
)

from app.services.user_service import (
    signup,
    login,
    get_all_users,
    get_user,
    update_user,
    delete_user,
    assign_group,
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


# =====================================================
# Signup
# =====================================================
@router.post(
    "/signup",
    response_model=UserResponse,
)
def signup_user(
    user: UserCreate,
    db: Session = Depends(get_db),
):
    return signup(
        db,
        user.username,
        user.email,
        user.password,
        user.group_id,
    )


# =====================================================
# Login
# =====================================================
@router.post("/login")
def login_user(
    user: UserLogin,
    db: Session = Depends(get_db),
):
    return login(
        db,
        user.email,
        user.password,
    )


# =====================================================
# Get All Users
# =====================================================
@router.get(
    "/users",
    response_model=list[UserResponse],
)
def get_users(
    db: Session = Depends(get_db),
):
    return get_all_users(db)


# =====================================================
# Get User By ID
# =====================================================
@router.get(
    "/users/{user_id}",
    response_model=UserResponse,
)
def get_one(
    user_id: int,
    db: Session = Depends(get_db),
):
    return get_user(
        db,
        user_id,
    )


# =====================================================
# Update User
# =====================================================
@router.put(
    "/users/{user_id}",
    response_model=UserResponse,
)
def update(
    user_id: int,
    user: UserCreate,
    db: Session = Depends(get_db),
):
    return update_user(
        db,
        user_id,
        user.username,
        user.email,
        user.group_id,
    )


# =====================================================
# Delete User
# =====================================================
@router.delete("/users/{user_id}")
def delete(
    user_id: int,
    db: Session = Depends(get_db),
):
    return delete_user(
        db,
        user_id,
    )


# =====================================================
# Assign User To Group
# =====================================================
@router.put(
    "/users/{user_id}/group",
    response_model=UserResponse,
)
def update_group(
    user_id: int,
    data: UserGroupUpdate,
    db: Session = Depends(get_db),
):
    return assign_group(
        db,
        user_id,
        data.group_id,
    )
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.user_group import (
    UserGroupCreate,
    UserGroupResponse,
)

from app.schemas.user import UserResponse

from app.services.user_group_service import (
    create_group,
    get_groups,
    get_group,
    update_group,
    delete_group,
    add_user_to_group,
    remove_user_from_group,
    get_group_members,
)

router = APIRouter(
    prefix="/groups",
    tags=["User Groups"]
)


# =====================================================
# GROUP CRUD
# =====================================================

# Create Group
@router.post(
    "/",
    response_model=UserGroupResponse
)
def create(
    group: UserGroupCreate,
    db: Session = Depends(get_db)
):
    return create_group(
        db,
        group.group_name
    )


# Get All Groups
@router.get(
    "/",
    response_model=list[UserGroupResponse]
)
def list_groups(
    db: Session = Depends(get_db)
):
    return get_groups(db)


# Get Single Group
@router.get(
    "/{group_id}",
    response_model=UserGroupResponse
)
def get_one(
    group_id: int,
    db: Session = Depends(get_db)
):
    return get_group(
        db,
        group_id
    )


# Update Group
@router.put(
    "/{group_id}",
    response_model=UserGroupResponse
)
def update(
    group_id: int,
    group: UserGroupCreate,
    db: Session = Depends(get_db)
):
    return update_group(
        db,
        group_id,
        group.group_name
    )


# Delete Group
@router.delete("/{group_id}")
def delete(
    group_id: int,
    db: Session = Depends(get_db)
):
    return delete_group(
        db,
        group_id
    )


# =====================================================
# GROUP MEMBERS
# =====================================================

# Add User To Group
@router.post("/{group_id}/users/{user_id}")
def add_user(
    group_id: int,
    user_id: int,
    db: Session = Depends(get_db)
):
    return add_user_to_group(
        db,
        group_id,
        user_id
    )


# Remove User From Group
@router.delete("/{group_id}/users/{user_id}")
def remove_user(
    group_id: int,
    user_id: int,
    db: Session = Depends(get_db)
):
    return remove_user_from_group(
        db,
        group_id,
        user_id
    )


# View Group Members
@router.get(
    "/{group_id}/members",
    response_model=list[UserResponse]
)
def members(
    group_id: int,
    db: Session = Depends(get_db)
):
    return get_group_members(
        db,
        group_id
    )
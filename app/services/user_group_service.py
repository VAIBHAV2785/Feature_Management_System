from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.user_group import UserGroup
from app.models.user import User

from app.services.audit_service import create_audit_log


# =====================================================
# Create Group
# =====================================================
def create_group(
    db: Session,
    group_name: str,
):

    existing = (
        db.query(UserGroup)
        .filter(UserGroup.group_name == group_name)
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Group already exists",
        )

    group = UserGroup(
        group_name=group_name,
    )

    db.add(group)
    db.commit()
    db.refresh(group)

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Create Group",
        old_state=None,
        new_state={
            "group_name": group.group_name,
        },
    )

    return group


# =====================================================
# Get All Groups
# =====================================================
def get_groups(db: Session):

    return db.query(UserGroup).all()


# =====================================================
# Get Single Group
# =====================================================
def get_group(
    db: Session,
    group_id: int,
):

    group = (
        db.query(UserGroup)
        .filter(UserGroup.id == group_id)
        .first()
    )

    if not group:
        raise HTTPException(
            status_code=404,
            detail="Group not found",
        )

    return group


# =====================================================
# Update Group
# =====================================================
def update_group(
    db: Session,
    group_id: int,
    group_name: str,
):

    group = get_group(db, group_id)

    old_state = {
        "group_name": group.group_name,
    }

    group.group_name = group_name

    db.commit()
    db.refresh(group)

    new_state = {
        "group_name": group.group_name,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Update Group",
        old_state=old_state,
        new_state=new_state,
    )

    return group


# =====================================================
# Delete Group
# =====================================================
def delete_group(
    db: Session,
    group_id: int,
):

    group = get_group(db, group_id)

    old_state = {
        "group_name": group.group_name,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Delete Group",
        old_state=old_state,
        new_state=None,
    )

    db.delete(group)
    db.commit()

    return {
        "message": "Group deleted successfully"
    }


# =====================================================
# Add User To Group
# =====================================================
def add_user_to_group(
    db: Session,
    group_id: int,
    user_id: int,
):

    group = get_group(db, group_id)

    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    old_state = {
        "group_id": user.group_id,
    }

    user.group_id = group.id

    db.commit()
    db.refresh(user)

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Add User To Group",
        old_state=old_state,
        new_state={
            "group_id": group.id,
            "group_name": group.group_name,
            "username": user.username,
        },
    )

    return user


# =====================================================
# Remove User From Group
# =====================================================
def remove_user_from_group(
    db: Session,
    group_id: int,
    user_id: int,
):

    group = get_group(db, group_id)

    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    if user.group_id != group.id:
        raise HTTPException(
            status_code=400,
            detail="User is not a member of this group",
        )

    old_state = {
        "group_id": group.id,
        "group_name": group.group_name,
    }

    user.group_id = None

    db.commit()
    db.refresh(user)

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Remove User From Group",
        old_state=old_state,
        new_state={
            "group_id": None,
        },
    )

    return {
        "message": f"{user.username} removed successfully"
    }


# =====================================================
# Get Group Members
# =====================================================
def get_group_members(
    db: Session,
    group_id: int,
):

    get_group(db, group_id)

    return (
        db.query(User)
        .filter(User.group_id == group_id)
        .all()
    )
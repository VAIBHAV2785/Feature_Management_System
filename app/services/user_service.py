from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.user import User
from app.models.user_group import UserGroup

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)

<<<<<<< HEAD
from app.services.audit_service import create_audit_log

=======
>>>>>>> bcd60838 (MILESTONE 2)

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
<<<<<<< HEAD
    existing_user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )
=======
    existing_user = db.query(User).filter(
        User.email == email
    ).first()
>>>>>>> bcd60838 (MILESTONE 2)

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered",
        )

    if group_id is not None:
<<<<<<< HEAD
        group = (
            db.query(UserGroup)
            .filter(UserGroup.id == group_id)
            .first()
        )
=======
        group = db.query(UserGroup).filter(
            UserGroup.id == group_id
        ).first()
>>>>>>> bcd60838 (MILESTONE 2)

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

<<<<<<< HEAD
    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Create User",
        old_state=None,
        new_state={
            "username": user.username,
            "email": user.email,
            "group_id": user.group_id,
        },
    )

=======
>>>>>>> bcd60838 (MILESTONE 2)
    return user


# =====================================================
# Login
# =====================================================
def login(
    db: Session,
    email: str,
    password: str,
):
<<<<<<< HEAD
    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )
=======
    user = db.query(User).filter(
        User.email == email
    ).first()
>>>>>>> bcd60838 (MILESTONE 2)

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
<<<<<<< HEAD
    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )
=======
    user = db.query(User).filter(
        User.id == user_id
    ).first()
>>>>>>> bcd60838 (MILESTONE 2)

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
<<<<<<< HEAD
    user = get_user(db, user_id)

    if group_id is not None:
        group = (
            db.query(UserGroup)
            .filter(UserGroup.id == group_id)
            .first()
        )
=======
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
>>>>>>> bcd60838 (MILESTONE 2)

        if group is None:
            raise HTTPException(
                status_code=404,
                detail="Group not found",
            )

<<<<<<< HEAD
    old_state = {
        "username": user.username,
        "email": user.email,
        "group_id": user.group_id,
    }

=======
>>>>>>> bcd60838 (MILESTONE 2)
    user.username = username
    user.email = email
    user.group_id = group_id

    db.commit()
    db.refresh(user)

<<<<<<< HEAD
    new_state = {
        "username": user.username,
        "email": user.email,
        "group_id": user.group_id,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Update User",
        old_state=old_state,
        new_state=new_state,
    )

=======
>>>>>>> bcd60838 (MILESTONE 2)
    return user


# =====================================================
# Delete User
# =====================================================
def delete_user(
    db: Session,
    user_id: int,
):
<<<<<<< HEAD
    user = get_user(db, user_id)

    old_state = {
        "username": user.username,
        "email": user.email,
        "group_id": user.group_id,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Delete User",
        old_state=old_state,
        new_state=None,
    )
=======
    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )
>>>>>>> bcd60838 (MILESTONE 2)

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
<<<<<<< HEAD
    user = get_user(db, user_id)

    group = (
        db.query(UserGroup)
        .filter(UserGroup.id == group_id)
        .first()
    )
=======
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
>>>>>>> bcd60838 (MILESTONE 2)

    if group is None:
        raise HTTPException(
            status_code=404,
            detail="Group not found",
        )

<<<<<<< HEAD
    old_state = {
        "group_id": user.group_id,
    }

=======
>>>>>>> bcd60838 (MILESTONE 2)
    user.group_id = group_id

    db.commit()
    db.refresh(user)

<<<<<<< HEAD
    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Assign User Group",
        old_state=old_state,
        new_state={
            "group_id": group.id,
            "group_name": group.group_name,
        },
    )

=======
>>>>>>> bcd60838 (MILESTONE 2)
    return user
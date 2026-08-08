from fastapi import HTTPException
from sqlalchemy.orm import Session
<<<<<<< HEAD

from app.models.environment import Environment

from app.services.audit_service import create_audit_log


# ==========================================
# Create Environment
# ==========================================
def create_environment(
    db: Session,
    name: str,
    description: str,
):

    environment = Environment(
        name=name,
        description=description,
=======
from app.models.environment import Environment


# Create Environment
def create_environment(db: Session, name: str, description: str):
    environment = Environment(
        name=name,
        description=description
>>>>>>> bcd60838 (MILESTONE 2)
    )

    db.add(environment)
    db.commit()
    db.refresh(environment)

<<<<<<< HEAD
    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Create Environment",
        environment_id=environment.id,
        old_state=None,
        new_state={
            "name": environment.name,
            "description": environment.description,
        },
    )

    return environment


# ==========================================
# Get All Environments
# ==========================================
def get_all_environments(db: Session):

    return db.query(Environment).all()


# ==========================================
# Get Environment By ID
# ==========================================
def get_environment_by_id(
    db: Session,
    environment_id: int,
):

    environment = (
        db.query(Environment)
        .filter(Environment.id == environment_id)
        .first()
    )

    if not environment:
        raise HTTPException(
            status_code=404,
            detail="Environment not found",
=======
    return environment


# List All Environments
def get_all_environments(db: Session):
    return db.query(Environment).all()


# Get Single Environment
def get_environment_by_id(db: Session, environment_id: int):
    environment = db.query(Environment).filter(
        Environment.id == environment_id
    ).first()

    if environment is None:
        raise HTTPException(
            status_code=404,
            detail="Environment not found"
>>>>>>> bcd60838 (MILESTONE 2)
        )

    return environment


<<<<<<< HEAD
# ==========================================
# Update Environment
# ==========================================
=======
# Update Environment
>>>>>>> bcd60838 (MILESTONE 2)
def update_environment(
    db: Session,
    environment_id: int,
    name: str,
<<<<<<< HEAD
    description: str,
):

    environment = (
        db.query(Environment)
        .filter(Environment.id == environment_id)
        .first()
    )

    if not environment:
        raise HTTPException(
            status_code=404,
            detail="Environment not found",
        )

    old_state = {
        "name": environment.name,
        "description": environment.description,
    }

=======
    description: str
):
    environment = db.query(Environment).filter(
        Environment.id == environment_id
    ).first()

    if environment is None:
        raise HTTPException(
            status_code=404,
            detail="Environment not found"
        )

>>>>>>> bcd60838 (MILESTONE 2)
    environment.name = name
    environment.description = description

    db.commit()
    db.refresh(environment)

<<<<<<< HEAD
    new_state = {
        "name": environment.name,
        "description": environment.description,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Update Environment",
        environment_id=environment.id,
        old_state=old_state,
        new_state=new_state,
    )

    return environment


# ==========================================
# Delete Environment
# ==========================================
def delete_environment(
    db: Session,
    environment_id: int,
):

    environment = (
        db.query(Environment)
        .filter(Environment.id == environment_id)
        .first()
    )

    if not environment:
        raise HTTPException(
            status_code=404,
            detail="Environment not found",
        )

    old_state = {
        "name": environment.name,
        "description": environment.description,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Delete Environment",
        environment_id=environment.id,
        old_state=old_state,
        new_state=None,
    )

    db.delete(environment)
    db.commit()

    return {
        "message": "Environment deleted successfully"
    }
=======
    return environment


# Delete Environment
def delete_environment(db: Session, environment_id: int):
    environment = db.query(Environment).filter(
        Environment.id == environment_id
    ).first()

    if environment is None:
        raise HTTPException(
            status_code=404,
            detail="Environment not found"
        )

    db.delete(environment)
    db.commit()

    return {"message": "Environment deleted successfully"}
>>>>>>> bcd60838 (MILESTONE 2)

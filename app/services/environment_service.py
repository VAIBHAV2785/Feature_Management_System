from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.models.environment import Environment


# Create Environment
def create_environment(db: Session, name: str, description: str):
    environment = Environment(
        name=name,
        description=description
    )

    db.add(environment)
    db.commit()
    db.refresh(environment)

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
        )

    return environment


# Update Environment
def update_environment(
    db: Session,
    environment_id: int,
    name: str,
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

    environment.name = name
    environment.description = description

    db.commit()
    db.refresh(environment)

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
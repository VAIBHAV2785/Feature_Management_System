from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.environment import (
    EnvironmentCreate,
    EnvironmentResponse,
)

from app.services.environment_service import (
    create_environment,
    get_all_environments,
    get_environment_by_id,
    update_environment,
    delete_environment,
)

router = APIRouter(
    prefix="/environments",
    tags=["Environments"]
)


# Create Environment
@router.post("/", response_model=EnvironmentResponse)
def create_environment_api(
    environment: EnvironmentCreate,
    db: Session = Depends(get_db)
):
    return create_environment(
        db,
        environment.name,
        environment.description
    )


# List All Environments
@router.get("/", response_model=list[EnvironmentResponse])
def list_environments(
    db: Session = Depends(get_db)
):
    return get_all_environments(db)


# Get Single Environment
@router.get("/{environment_id}", response_model=EnvironmentResponse)
def get_environment(
    environment_id: int,
    db: Session = Depends(get_db)
):
    return get_environment_by_id(
        db,
        environment_id
    )


# Update Environment
@router.put("/{environment_id}", response_model=EnvironmentResponse)
def update_environment_api(
    environment_id: int,
    environment: EnvironmentCreate,
    db: Session = Depends(get_db)
):
    return update_environment(
        db,
        environment_id,
        environment.name,
        environment.description
    )


# Delete Environment
@router.delete("/{environment_id}")
def delete_environment_api(
    environment_id: int,
    db: Session = Depends(get_db)
):
    return delete_environment(
        db,
        environment_id
    )
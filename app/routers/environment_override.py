from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.environment_override import (
    EnvironmentOverrideCreate,
    EnvironmentOverrideResponse,
)

from app.services.environment_override_service import (
    create_override,
    get_all_overrides,
    get_override,
    update_override,
    delete_override,
)

router = APIRouter(
    prefix="/overrides",
    tags=["Environment Overrides"]
)


<<<<<<< HEAD
=======
# Create Override
>>>>>>> bcd60838 (MILESTONE 2)
@router.post("/", response_model=EnvironmentOverrideResponse)
def create(
    override: EnvironmentOverrideCreate,
    db: Session = Depends(get_db)
):
    return create_override(db, override)


<<<<<<< HEAD
=======
# List Overrides
>>>>>>> bcd60838 (MILESTONE 2)
@router.get("/", response_model=list[EnvironmentOverrideResponse])
def list_all(
    db: Session = Depends(get_db)
):
    return get_all_overrides(db)


<<<<<<< HEAD
=======
# Get Single Override
>>>>>>> bcd60838 (MILESTONE 2)
@router.get("/{override_id}", response_model=EnvironmentOverrideResponse)
def get_one(
    override_id: int,
    db: Session = Depends(get_db)
):
    return get_override(db, override_id)


<<<<<<< HEAD
=======
# Update Override
>>>>>>> bcd60838 (MILESTONE 2)
@router.put("/{override_id}", response_model=EnvironmentOverrideResponse)
def update(
    override_id: int,
    value: bool,
    db: Session = Depends(get_db)
):
    return update_override(db, override_id, value)


<<<<<<< HEAD
=======
# Delete Override
>>>>>>> bcd60838 (MILESTONE 2)
@router.delete("/{override_id}")
def delete(
    override_id: int,
    db: Session = Depends(get_db)
):
    return delete_override(db, override_id)
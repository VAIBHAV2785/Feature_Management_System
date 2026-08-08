from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.environment_override import EnvironmentOverride
from app.models.feature_flag import FeatureFlag
from app.models.environment import Environment

from app.schemas.environment_override import EnvironmentOverrideCreate

<<<<<<< HEAD
from app.services.audit_service import create_audit_log


# ==================================================
# Create Override
# ==================================================
=======

>>>>>>> bcd60838 (MILESTONE 2)
def create_override(
    db: Session,
    override: EnvironmentOverrideCreate,
):

    new_override = EnvironmentOverride(
        flag_id=override.flag_id,
        environment_id=override.environment_id,
        value=override.value,
    )

    db.add(new_override)
    db.commit()
    db.refresh(new_override)

<<<<<<< HEAD
    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Create Environment Override",
        flag_id=new_override.flag_id,
        environment_id=new_override.environment_id,
        old_state=None,
        new_state={
            "value": new_override.value,
        },
    )

    return get_override(db, new_override.id)


# ==================================================
# Get All Overrides
# ==================================================
=======
    return get_override(db, new_override.id)


>>>>>>> bcd60838 (MILESTONE 2)
def get_all_overrides(db: Session):

    overrides = db.query(EnvironmentOverride).all()

    result = []

    for override in overrides:

        flag = (
            db.query(FeatureFlag)
            .filter(FeatureFlag.id == override.flag_id)
            .first()
        )

        environment = (
            db.query(Environment)
            .filter(Environment.id == override.environment_id)
            .first()
        )

        result.append({
            "id": override.id,
            "flag_id": override.flag_id,
            "environment_id": override.environment_id,
            "flag_name": flag.key if flag else "",
            "environment_name": environment.name if environment else "",
            "value": override.value,
        })

    return result


<<<<<<< HEAD
# ==================================================
# Get Single Override
# ==================================================
=======
>>>>>>> bcd60838 (MILESTONE 2)
def get_override(
    db: Session,
    override_id: int,
):

    override = (
        db.query(EnvironmentOverride)
        .filter(EnvironmentOverride.id == override_id)
        .first()
    )

    if not override:
        raise HTTPException(
            status_code=404,
            detail="Override not found",
        )

    flag = (
        db.query(FeatureFlag)
        .filter(FeatureFlag.id == override.flag_id)
        .first()
    )

    environment = (
        db.query(Environment)
        .filter(Environment.id == override.environment_id)
        .first()
    )

    return {
        "id": override.id,
        "flag_id": override.flag_id,
        "environment_id": override.environment_id,
        "flag_name": flag.key if flag else "",
        "environment_name": environment.name if environment else "",
        "value": override.value,
    }


<<<<<<< HEAD
# ==================================================
# Update Override
# ==================================================
=======
>>>>>>> bcd60838 (MILESTONE 2)
def update_override(
    db: Session,
    override_id: int,
    value: bool,
):

    override = (
        db.query(EnvironmentOverride)
        .filter(EnvironmentOverride.id == override_id)
        .first()
    )

    if not override:
        raise HTTPException(
            status_code=404,
            detail="Override not found",
        )

<<<<<<< HEAD
    old_state = {
        "value": override.value,
    }

=======
>>>>>>> bcd60838 (MILESTONE 2)
    override.value = value

    db.commit()
    db.refresh(override)

<<<<<<< HEAD
    new_state = {
        "value": override.value,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Update Environment Override",
        flag_id=override.flag_id,
        environment_id=override.environment_id,
        old_state=old_state,
        new_state=new_state,
    )

    return get_override(db, override.id)


# ==================================================
# Delete Override
# ==================================================
=======
    return get_override(db, override.id)


>>>>>>> bcd60838 (MILESTONE 2)
def delete_override(
    db: Session,
    override_id: int,
):

    override = (
        db.query(EnvironmentOverride)
        .filter(EnvironmentOverride.id == override_id)
        .first()
    )

    if not override:
        raise HTTPException(
            status_code=404,
            detail="Override not found",
        )

<<<<<<< HEAD
    old_state = {
        "value": override.value,
    }

    create_audit_log(
        db=db,
        performed_by="Admin",
        action="Delete Environment Override",
        flag_id=override.flag_id,
        environment_id=override.environment_id,
        old_state=old_state,
        new_state=None,
    )

=======
>>>>>>> bcd60838 (MILESTONE 2)
    db.delete(override)
    db.commit()

    return {
        "message": "Override deleted successfully"
    }
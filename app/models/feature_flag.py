from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    DateTime,
)
<<<<<<< HEAD

from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
=======
from sqlalchemy.sql import func
>>>>>>> bcd60838 (MILESTONE 2)

from app.database.connection import Base


class FeatureFlag(Base):
    __tablename__ = "feature_flags"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    key = Column(
        String(100),
        unique=True,
        nullable=False
    )

    description = Column(
        String(255)
    )

    type = Column(
        String(20)
    )

    default_value = Column(
        String(100)
    )

    enabled = Column(
        Boolean,
        default=True
    )

    owner_team = Column(
        String(100)
    )

    # Percentage Rollout (0-100)
    rollout_percentage = Column(
        Integer,
        nullable=False,
        default=100
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
<<<<<<< HEAD
    )

    # -----------------------------
    # Relationships
    # -----------------------------

    audit_logs = relationship(
        "AuditLog",
        back_populates="flag",
        cascade="all, delete-orphan"
=======
>>>>>>> bcd60838 (MILESTONE 2)
    )
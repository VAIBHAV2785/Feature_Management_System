from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
    ForeignKey,
    JSON,
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.database.connection import Base


class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    performed_by = Column(
        String(100),
        nullable=False,
    )

    action = Column(
        String(100),
        nullable=False,
    )

    flag_id = Column(
        Integer,
        ForeignKey("feature_flags.id"),
        nullable=True,
    )

    environment_id = Column(
        Integer,
        ForeignKey("environments.id"),
        nullable=True,
    )

    old_state = Column(
        JSON,
        nullable=True,
    )

    new_state = Column(
        JSON,
        nullable=True,
    )

    timestamp = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    # Relationships
    flag = relationship(
        "FeatureFlag",
        back_populates="audit_logs",
    )

    environment = relationship(
        "Environment",
        back_populates="audit_logs",
    )
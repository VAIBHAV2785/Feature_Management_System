from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    DateTime,
    ForeignKey,
)
from sqlalchemy.sql import func

from app.database.connection import Base


class EvaluationLog(Base):
    __tablename__ = "evaluation_logs"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    flag_id = Column(
        Integer,
        ForeignKey("feature_flags.id"),
        nullable=False,
    )

    user_id = Column(
        String(100),
        nullable=False,
    )

    environment = Column(
        String(50),
        nullable=False,
    )

    result = Column(
        Boolean,
        nullable=False,
    )

    timestamp = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )
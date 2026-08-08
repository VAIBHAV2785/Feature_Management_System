from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
    ForeignKey,
    Boolean,
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.database.connection import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    username = Column(
        String(100),
        unique=True,
        nullable=False,
    )

    email = Column(
        String(150),
        unique=True,
        nullable=False,
    )

    password = Column(
        String(255),
        nullable=False,
    )

    # NEW
    role = Column(
        String(20),
        default="user",
        nullable=False,
    )

    # NEW
    is_active = Column(
        Boolean,
        default=True,
    )

    group_id = Column(
        Integer,
        ForeignKey("user_groups.id"),
        nullable=True,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    group = relationship(
        "UserGroup",
        back_populates="users",
    )
from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
    ForeignKey,
<<<<<<< HEAD
    Boolean,
=======
>>>>>>> bcd60838 (MILESTONE 2)
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
<<<<<<< HEAD
        nullable=False,
=======
        nullable=False
>>>>>>> bcd60838 (MILESTONE 2)
    )

    email = Column(
        String(150),
        unique=True,
<<<<<<< HEAD
        nullable=False,
=======
        nullable=False
>>>>>>> bcd60838 (MILESTONE 2)
    )

    password = Column(
        String(255),
<<<<<<< HEAD
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
=======
        nullable=False
    )

    # NEW
    group_id = Column(
        Integer,
        ForeignKey("user_groups.id"),
        nullable=True
>>>>>>> bcd60838 (MILESTONE 2)
    )

    created_at = Column(
        DateTime(timezone=True),
<<<<<<< HEAD
        server_default=func.now(),
    )

    group = relationship(
        "UserGroup",
        back_populates="users",
=======
        server_default=func.now()
    )

    # Relationship
    group = relationship(
        "UserGroup",
        back_populates="users"
>>>>>>> bcd60838 (MILESTONE 2)
    )
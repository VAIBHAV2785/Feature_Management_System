from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.connection import Base


class UserGroup(Base):
    __tablename__ = "user_groups"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    group_name = Column(
        String(100),
        unique=True,
        nullable=False
    )

    users = relationship(
        "User",
        back_populates="group"
    )
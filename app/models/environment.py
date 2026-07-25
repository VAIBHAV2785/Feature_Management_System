from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from app.database.connection import Base

class Environment(Base):
    __tablename__ = "environments"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
    description = Column(String(255))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
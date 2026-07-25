from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from app.database.connection import Base

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)
    action = Column(String(100))
    performed_by = Column(String(100))
    old_value = Column(String(255))
    new_value = Column(String(255))
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
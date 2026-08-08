from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class AuditLogResponse(BaseModel):

    id: int

    performed_by: str

    action: str

    flag_id: Optional[int] = None

    environment_id: Optional[int] = None

    old_state: Optional[dict] = None

    new_state: Optional[dict] = None

    timestamp: datetime

    class Config:
        from_attributes = True
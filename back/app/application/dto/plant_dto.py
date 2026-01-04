from datetime import date
from typing import Optional

from pydantic import BaseModel

class AnalyzeResponseDTO(BaseModel):
    disease: str
    confidence: float
    advice: Optional[str] = None
    date: date
    plant
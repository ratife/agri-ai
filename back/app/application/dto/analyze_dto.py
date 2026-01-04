from datetime import date
from typing import Optional

from pydantic import BaseModel

from app.application.dto import PlantDTO


class AnalyzeResponseDTO(BaseModel):
    disease: str
    confidence: float
    advice: Optional[str] = None
    date: date
    plant : PlantDTO
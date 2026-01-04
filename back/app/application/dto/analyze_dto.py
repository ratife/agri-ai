from datetime import date
from typing import Optional

from pydantic import BaseModel

from app.application.dto import PlantDTO
from app.application.dto.disease_dto import DiseaseDTO


class AnalyzeDTO(BaseModel):
    disease: DiseaseDTO
    confidence: float
    advice: Optional[str] = None
    date: date
    plant : PlantDTO
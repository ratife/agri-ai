from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from datetime import datetime
from sqlalchemy.orm import relationship

from app.domain.models import Plant, Disease
from app.infrastructure.db import Base
from app.domain.models.analysis import Analysis

class AnalysisModel(Base):
    __tablename__ = "analyses"

    id = Column(Integer, primary_key=True)

    plant_id = Column(Integer, ForeignKey("plants.id"))
    disease_id = Column(Integer, ForeignKey("diseases.id"))
    model_id = Column(Integer, ForeignKey("prediction_models.id"))

    confidence = Column(Float)
    image_path = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    advice  = Column(String)

    plant = relationship("PlantModel")
    disease = relationship("DiseaseModel")
    model = relationship("PredictionModelModel")

    def __str__(self):
        return f"AnalysisModel(id={self.id}, plant_id={self.plant_id}, disease_id={self.disease_id}, confidence={self.confidence}, image_path='{self.image_path}', created_at={self.created_at})"

    def to_domain(self) -> Analysis:
        """
        Convertit l'entité persistante (AnalysisModel) en entité domaine pure (Analysis)
        """
        return Analysis(
            plant=Plant(
                id=self.plant.id,
                name=self.plant.name,
                scientific_name=self.plant.scientific_name,
                category=self.plant.category
            ),
            disease=Disease(
                id=self.disease.id,
                name=self.disease.name,
                symptoms=self.disease.description,
                severity=self.disease.severity
            ),
            confidence=self.confidence,
            advice=self.advice,
            image_path=self.image_path,
            created_at=self.created_at
        )
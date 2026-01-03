from sqlalchemy import Column, Integer, String,Float
from app.infrastructure.db import Base
from sqlalchemy.orm import relationship

class PredictionModelModel(Base):
    __tablename__ = "prediction_models"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    version = Column(String)
    accuracy = Column(Float)

    #analyses = relationship("AnalysisModel", back_populates="model")
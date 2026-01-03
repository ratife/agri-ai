from sqlalchemy import Column, Integer, String
from app.infrastructure.db import Base
from sqlalchemy.orm import relationship

class DiseaseModel(Base):
    __tablename__ = "diseases"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    severity = Column(String)

    #analyses = relationship("AnalysisModel", back_populates="disease")
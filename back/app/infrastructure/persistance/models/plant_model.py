from sqlalchemy import Column, Integer, String
from app.infrastructure.db import Base

class PlantModel(Base):
    __tablename__ = "plants"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False, unique=True)
    scientific_name = Column(String)
    category = Column(String)

    #analyses = relationship("AnalysisModel", back_populates="plant")
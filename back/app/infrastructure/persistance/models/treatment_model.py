from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from app.infrastructure.db import Base

class TreatmentModel(Base):
    __tablename__ = "treatments"

    id = Column(Integer, primary_key=True)
    disease_id = Column(Integer, ForeignKey("diseases.id"))
    description = Column(String)
    organic = Column(Boolean)
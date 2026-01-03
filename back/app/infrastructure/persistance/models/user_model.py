from sqlalchemy import Column, Integer, String
from app.infrastructure.db import Base

class UserModel(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    phone = Column(String)
    region = Column(String)
    role = Column(String)
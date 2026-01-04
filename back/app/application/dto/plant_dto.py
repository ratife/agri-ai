from datetime import date
from typing import Optional

from pydantic import BaseModel

class PlantDTO(BaseModel):
    id:int
    name:str
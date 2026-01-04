from datetime import date
from typing import Optional

from pydantic import BaseModel

class DiseaseDTO(BaseModel):
    id : int
    name : str
    severity : str
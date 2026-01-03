from pydantic import BaseModel
from fastapi import Query

class PaginationParams(BaseModel):
    page: int = Query(1, ge=1, description="Numéro de page (commence à 1)")
    limit: int = Query(10, ge=1, le=100, description="Nombre d'éléments par page")
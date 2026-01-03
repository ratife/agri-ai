from pydantic import BaseModel

class PaginatedResult(BaseModel):
    items: list
    total: int
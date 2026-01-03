from pydantic import BaseModel

class PaginatedResponse(BaseModel):
    items: list
    total: int
    page: int
    limit: int
    total_pages: int
    has_next: bool
    has_prev: bool
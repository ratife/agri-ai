from typing import Optional

from fastapi import APIRouter, UploadFile, File, Query,Form

from app.api.dto.paginate_responses import PaginatedResponse
from app.api.dto.pagination_params import PaginationParams
from app.application import ApplicationService, AnalyzeRequestDTO
from fastapi import Depends

from app.infrastructure.dependencies import get_service

api_router = APIRouter()

@api_router.post("/analyze")
def analyze(plant: str = Form(...),
            file: UploadFile = File(...),
            service: ApplicationService = Depends(get_service)):
    image = file.file.read()
    request = AnalyzeRequestDTO(
        image=image,
        plant_name=plant
    )
    return service.analyze_plant(request)

@api_router.get("/history")
def history(
    plant: Optional[str] = Query(None, description="Filtrer par nom de plante"),
    pagination: PaginationParams = Depends(),
    service: ApplicationService = Depends(get_service),
):
    """
    Récupère l'historique des analyses avec pagination.
    """
    offset = (pagination.page - 1) * pagination.limit
    paginate_result =  service.get_history(  # Supposé async
        plant_name=plant,
        limit=pagination.limit,
        offset=offset
    )

    # Calcul du nombre total de pages (division entière arrondie au supérieur)
    total_pages = (paginate_result.total + pagination.limit - 1) // pagination.limit

    return PaginatedResponse(
        items=paginate_result.items,
        total=paginate_result.total,
        page=pagination.page,
        limit=pagination.limit,
        total_pages=total_pages,
        has_next=pagination.page < total_pages,
        has_prev=pagination.page > 1,
    )
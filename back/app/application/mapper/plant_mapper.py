from app.application.dto import PlantDTO
from app.domain.models import  Plant


class PlantMapper:

    @staticmethod
    def to_dto(result:Plant):
        return PlantDTO(
            id=result.id,
            name=result.name
        )

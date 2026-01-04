from app.application.dto.disease_dto import DiseaseDTO
from app.domain.models import Disease


class DiseaseMapper:

    @staticmethod
    def to_dto(result:Disease):
        return DiseaseDTO(
            id = result.id,
            name = result.name,
            severity= result.severity
        )

from app.application.dto import AnalyzeDTO
from app.application.mapper.disease_mapper import DiseaseMapper
from app.application.mapper.plant_mapper import PlantMapper
from app.domain.models import Analysis


class AnalysisMapper:

    @staticmethod
    def to_dto(result:Analysis):
        return AnalyzeDTO(
            disease= DiseaseMapper.to_dto(result.disease),
            confidence= result.confidence,
            advice=result.advice,
            date=result.created_at.date(),
            plant=PlantMapper.to_dto(result.plant)
        )

from app.application.dto.analyze_response_dto import AnalyzeResponseDTO
from app.domain.models import Analysis


class AnalysisMapper:

    @staticmethod
    def to_response(result:Analysis):
        return AnalyzeResponseDTO(
            disease= result.disease.name,
            confidence= result.confidence,
            advice=result.advice,
            date=result.created_at.date()
        )

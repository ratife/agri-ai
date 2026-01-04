from app.application.dto import AnalyzeDTO
from app.domain.models import Analysis


class AnalysisMapper:

    @staticmethod
    def to_response(result:Analysis):
        return AnalyzeDTO(
            disease= result.disease,
            confidence= result.confidence,
            advice=result.advice,
            date=result.created_at.date()
        )

from app.application.ports import AnalysisRepositoryPort
from app.application.services import DiagnosticService

class AnalyzePlantUseCase:

    def __init__(
        self,
        diag_service : DiagnosticService,
        analysis_repository : AnalysisRepositoryPort
    ):
        self.diagnostic_service = diag_service
        self.analysis_repository = analysis_repository

    def execute(self, request):
        # 1. Appel domaine
        result = self.diagnostic_service.analyze(
            image=request.image,
            plant_name=request.plant_name
        )

        # 2. Sauvegarde
        result = self.analysis_repository.save(result)
        return result
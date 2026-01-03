from app.application import ApplicationService
from app.application.services import DiagnosticService
from app.application.use_cases.analyze_plant_usecase import AnalyzePlantUseCase
from app.application.use_cases.get_history_usecase import GetHistoryUseCase
from app.infrastructure.db import  SessionLocal
from app.infrastructure.ml.dummy_image_classifier import DummyImageClassifier
from app.infrastructure.persistance.repositories import PgAnalysisRepository, PgPlantRepository, \
    LocalFileSystemImageRepository, PgDiseaseRepository

from contextlib import contextmanager

@contextmanager
def db_session():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_service():
    with db_session() as db:
        classifier = DummyImageClassifier()
        repoAnalys = PgAnalysisRepository(db)
        repoPlant = PgPlantRepository(db)
        repoDisease = PgDiseaseRepository(db)
        image_repo = LocalFileSystemImageRepository()
        diagnostic_service = DiagnosticService(classifier, repoPlant, image_repo,repoDisease)

        analyze_uc = AnalyzePlantUseCase(diagnostic_service,repoAnalys)
        history_uc = GetHistoryUseCase(repoAnalys)

        return ApplicationService(analyze_uc, history_uc)
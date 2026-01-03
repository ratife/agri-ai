from app.infrastructure.persistance.repositories.pg_analysis_repository import  PgAnalysisRepository
from app.infrastructure.persistance.repositories.pg_plant_repository import PgPlantRepository
from app.infrastructure.persistance.repositories.local_file_system_image_repository import LocalFileSystemImageRepository
from app.infrastructure.persistance.repositories.pg_disease_repository import PgDiseaseRepository
__all__ = ["PgAnalysisRepository",
           "PgPlantRepository",
           "LocalFileSystemImageRepository",
           "PgDiseaseRepository"]
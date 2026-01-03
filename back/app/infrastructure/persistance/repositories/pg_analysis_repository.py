from typing import Optional

from app.application.dto import PaginatedResult
from app.application.ports.analysis_repository_port import AnalysisRepositoryPort
from app.infrastructure.persistance.models import PlantModel
from app.infrastructure.persistance.models.analysis_model import AnalysisModel
from app.domain.models.analysis import Analysis

class PgAnalysisRepository(AnalysisRepositoryPort):

    def __init__(self,  db):
        self.db = db

    def save(self, analysis: Analysis):
        entity = AnalysisModel(
            plant_id=analysis.plant.id,
            disease_id=analysis.disease.id,
            confidence=analysis.confidence,
            image_path = analysis.image_path
        )
        print(entity)
        self.db.add(entity)
        self.db.commit()
        self.db.refresh(entity)

        return entity.to_domain()

    def find(self,
             plant: Optional[str] = None,
             limit: int = 10,
             offset: int = 0) -> PaginatedResult:
        """
        Récupère les analyses avec pagination et filtre optionnel par nom de plante.
        """
        query = self.db.query(AnalysisModel)

        if plant:
            query = query.join(PlantModel, AnalysisModel.plant_id == PlantModel.id)
            query = query.filter(PlantModel.name == plant)

        # Comptage du total (important : on clone la query pour ne pas affecter la pagination)
        total = query.count()

        # Application de la pagination
        items = query.offset(offset).limit(limit).all()

        # Conversion des objets SQLAlchemy en objets domaine
        # Correction de la syntaxe : c'était une expression generator mal placée
        domain_items = [row.to_domain() for row in items]

        return PaginatedResult(items=domain_items, total=total)

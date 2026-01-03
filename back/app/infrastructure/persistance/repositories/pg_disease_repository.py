from app.application.ports.disease_repository_port import DiseaseRepositoryPort
from app.domain.models import Disease
from app.infrastructure.persistance.models import DiseaseModel

class PgDiseaseRepository(DiseaseRepositoryPort):

    def __init__(self, db):
        self.db = db

    def save(self, disease:Disease):
        self.db.add(disease)
        self.db.commit()
        self.db.refresh(disease)
        return disease

    def find_all(self):
        return self.db.query(DiseaseModel).all()

    def find_by_name(self, name_disease):
        disease =   self.db.query(DiseaseModel).filter_by(name=name_disease).first()
        return Disease(disease.id,disease.name,disease.description,disease.severity)
from app.infrastructure.persistance.models import TreatmentModel


class TreatmentRepository:

    def __init__(self, db):
        self.db = db

    def find_by_disease(self, disease_id):
        return (
            self.db.query(TreatmentModel)
            .filter(TreatmentModel.disease_id == disease_id)
            .all()
        )

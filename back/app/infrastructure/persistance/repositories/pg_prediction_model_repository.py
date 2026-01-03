from app.infrastructure.persistance.models import PredictionModelModel


class PredictionModelRepository:

    def __init__(self, db):
        self.db = db

    def save(self, model):
        self.db.add(model)
        self.db.commit()
        self.db.refresh(model)
        return model

    def find_latest(self):
        return (
            self.db.query(PredictionModelModel)
            .order_by(PredictionModelModel.id.desc())
            .first()
        )

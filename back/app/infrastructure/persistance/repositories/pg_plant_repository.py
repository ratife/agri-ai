from app.infrastructure.persistance.models import PlantModel

class PgPlantRepository:

    def __init__(self, db):
        self.db = db

    def save(self, plant):
        self.db.add(plant)
        self.db.commit()
        self.db.refresh(plant)
        return plant

    def find_all(self):
        return self.db.query(PlantModel).all()

    def find_by_name(self, name):
        return self.db.query(PlantModel).filter_by(name=name).first()
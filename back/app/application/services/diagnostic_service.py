from app.application.ports import ImageClassifierPort, PlantRepositoryPort, ImageRepositoryPort
from app.application.ports.disease_repository_port import DiseaseRepositoryPort
from app.domain.models import Analysis


class DiagnosticService:

    def __init__(self, classifier_port:ImageClassifierPort,
                 plant_repo : PlantRepositoryPort,
                 image_repo : ImageRepositoryPort,
                 disease_repo : DiseaseRepositoryPort):
        self.classifier = classifier_port
        self.plant_repo = plant_repo
        self.image_repository = image_repo
        self.disease_repo = disease_repo

    def analyze(self, image, plant_name: str):
        plant = self.plant_repo.find_by_name(plant_name)
        print(f"plant = {plant}")
        if not plant:
            raise Exception("Unknown plant")
        uuid_image = self.image_repository.save(image)
        result = self.classifier.predict(image)
        disease_name = result['disease']
        disease = self.disease_repo.find_by_name(disease_name)
        return Analysis(plant,disease,result['confidence'],result['advice'],uuid_image)
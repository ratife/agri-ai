from datetime import date


from app.domain.models.plant import Plant
from app.domain.models.disease import Disease


class Analysis:
    def __init__(
        self,
        plant: Plant,
        disease: Disease,
        confidence: float,
        advice : str,
        image_path: str,
        created_at : date=date.today()
    ):
        self.plant = plant
        self.disease = disease
        self.confidence = confidence
        self.advice = advice
        self.image_path = image_path
        self.created_at = created_at
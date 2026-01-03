class AnalyzeRequestDTO:
    def __init__(self, image: bytes, plant_name: str):
        self.image = image
        self.plant_name = plant_name

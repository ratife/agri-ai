class PredictionModel:
    def __init__(self, id: int, name: str, version: str, accuracy: float):
        self.id = id
        self.name = name
        self.version = version
        self.accuracy = accuracy
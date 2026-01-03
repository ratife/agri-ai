class Treatment:
    def __init__(self, id: int, disease_id: int, description: str, organic: bool):
        self.id = id
        self.disease_id = disease_id
        self.description = description
        self.organic = organic
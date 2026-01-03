class Confidence:
    def __init__(self, value: float):
        if value < 0 or value > 1:
            raise ValueError("Confidence must be between 0 and 1")
        self.value = value
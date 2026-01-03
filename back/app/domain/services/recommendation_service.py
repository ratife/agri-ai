class RecommendationService:

    def generate(self, disease):
        if disease.severity == 3:
            return "Urgent treatment required"
        elif disease.severity == 2:
            return "Monitor and apply treatment"
        return "No action needed"
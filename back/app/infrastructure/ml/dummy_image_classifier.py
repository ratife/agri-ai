from app.application.ports import ImageClassifierPort

class DummyImageClassifier(ImageClassifierPort):

    def predict(self, image):
        return {
            "disease": "Mildiou",
            "confidence": 0.87,
            "advice": "Apply organic fungicide"
        }

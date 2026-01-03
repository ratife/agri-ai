'''
from abc import ABC
import torch
import torch.nn as nn
from torchvision import models
from app.domain.ports.ImageClassifierPort import ImageClassifierPort
from .utils import preprocess_image

# Mapping maladie -> conseil (exemple)
# Plantes + maladies + conseils
PLANTS = [
    "tomato",
    "potato",
    "cassava",
    "bean",
    "rice",
    "pepper"
]

DISEASE_ADVICE = {
    "tomato": {
        "Mildiou": "Apply organic fungicide",
        "Tache_blanche": "Check irrigation",
        "Aucun": "No action needed"
    },
    "potato": {
        "Mildiou": "Apply chemical fungicide",
        "Poudre": "Spray with water",
        "Aucun": "No action needed"
    },
    "cassava": {
        "Anthracnose": "Remove infected leaves",
        "Virus": "Use resistant cuttings",
        "Aucun": "No action needed"
    },
    "bean": {
        "Rouille": "Apply copper spray",
        "Aucun": "No action needed"
    },
    "rice": {
        "Blast": "Use fungicide",
        "Brown Spot": "Check water level",
        "Aucun": "No action needed"
    },
    "pepper": {
        "Verticillium": "Rotate crops",
        "Aucun": "No action needed"
    }
}


class ImageClassifier(ImageClassifierPort, ABC):

    def __init__(self, model_path=None):
        # Charger MobileNetV2 pré-entrainé
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.model = models.mobilenet_v2(pretrained=True)

        # Remplacer la dernière couche pour notre nombre de maladies
        num_classes = len(DISEASE_ADVICE)
        self.model.classifier[1] = nn.Linear(self.model.last_channel, num_classes)
        self.model = self.model.to(self.device)
        self.model.eval()

        # Charger un modèle entraîné si path fourni
        if model_path:
            self.model.load_state_dict(torch.load(model_path, map_location=self.device))

        # Mapping indices -> maladies
        self.idx2disease = list(DISEASE_ADVICE.keys())

    def predict(self, image_bytes: bytes):
        tensor = preprocess_image(image_bytes).to(self.device)
        with torch.no_grad():
            output = self.model(tensor)
            probs = torch.softmax(output, dim=1)
            conf, idx = torch.max(probs, dim=1)

        disease = self.idx2disease[idx.item()]
        advice = DISEASE_ADVICE[disease]
        confidence = conf.item()

        return {
            "disease": disease,
            "confidence": confidence,
            "advice": advice
        }
'''
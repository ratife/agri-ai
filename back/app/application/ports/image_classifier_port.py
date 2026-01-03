from abc import ABC, abstractmethod

class ImageClassifierPort(ABC):

    @abstractmethod
    def predict(self, image):
        pass
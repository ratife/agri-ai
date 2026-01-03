from abc import ABC, abstractmethod

from app.domain.models import Disease


class DiseaseRepositoryPort(ABC):


    @abstractmethod
    def find_by_name(self, name_disease):
        pass

    @abstractmethod
    def save(self, disease:Disease):
        pass

    @abstractmethod
    def find_all(self):
        pass
from abc import ABC, abstractmethod


class PlantRepositoryPort(ABC):

    @abstractmethod
    def find_by_name(self, name: str):
        pass
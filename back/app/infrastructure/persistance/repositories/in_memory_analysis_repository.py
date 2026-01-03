from abc import ABC

from app.application.ports.analysis_repository_port import AnalysisRepositoryPort


class InMemoryAnalysisRepository(AnalysisRepositoryPort, ABC):

    def __init__(self):
        self.data = []

    def save(self, analysis):
        self.data.append(analysis)

    def find_all(self):
        return self.data

    def find_by_plant(self, plant_name):
        print(self.data)
        return [a for a in self.data if a["plant"] == plant_name]
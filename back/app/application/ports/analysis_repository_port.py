from abc import ABC, abstractmethod
from typing import Optional

from app.application.dto import PaginatedResult


class AnalysisRepositoryPort(ABC):

    @abstractmethod
    def save(self, analysis):
        pass

    @abstractmethod
    def find(self,
             plant: Optional[str] = None,
             limit: int = 10,
             offset: int = 0) -> PaginatedResult:
        pass
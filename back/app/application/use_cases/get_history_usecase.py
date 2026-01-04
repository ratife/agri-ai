from app.application.dto import PaginatedResult
from app.application.mapper.analysis_mapper import AnalysisMapper
from app.application.ports import AnalysisRepositoryPort


class GetHistoryUseCase:

    def __init__(self, analysis_repository:AnalysisRepositoryPort):
        self.analysis_repository = analysis_repository

    def execute(self, plant_name: str = None,
                limit:int = 0, offset:int = 10)-> PaginatedResult:
        paginatedResult = self.analysis_repository.find(plant_name,limit,offset)
        paginatedResult.items = [
            AnalysisMapper.to_dto(a)
            for a in paginatedResult.items
        ]
        return paginatedResult
from app.application.dto import PaginatedResult


class ApplicationService:

    def __init__(
        self,
        analyze_use_case,
        history_use_case
    ):
        self.analyze_use_case = analyze_use_case
        self.history_use_case = history_use_case

    def analyze_plant(self, request):
        return self.analyze_use_case.execute(request)

    def get_history(self,
                    plant_name=None,
                    limit:int=1,
                    offset:int=10
                    )-> PaginatedResult:
        return self.history_use_case.execute(plant_name,limit,offset)
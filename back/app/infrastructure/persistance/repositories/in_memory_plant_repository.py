from app.application.ports import  PlantRepositoryPort


class InMemoryPlantRepository(PlantRepositoryPort):

    def __init__(self):
        self.data = [{'name':'Manioc'},
                     {'name':'Blé'},
                     {'name':'Riz'},
                     {'name':'Vigne'},
                     {'name':'Pomme'},
                     {'name':'Orange'},
                     {'name':'Banane'},
                     {'name':'Café'},
                     {'name':'Tomate'}]

    def find_by_name(self, plant_name):
        return [a for a in self.data if a["name"] == plant_name]
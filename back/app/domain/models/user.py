class User:
    def __init__(self, id: int, name: str, phone: str, region: str, role: str):
        self.id = id
        self.name = name
        self.phone = phone
        self.region = region
        self.role = role  # farmer | agent | admin
from app.infrastructure.persistance.models import UserModel


class UserRepository:

    def __init__(self, db):
        self.db = db

    def save(self, user):
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

    def find_by_phone(self, phone):
        return self.db.query(UserModel).filter_by(phone=phone).first()

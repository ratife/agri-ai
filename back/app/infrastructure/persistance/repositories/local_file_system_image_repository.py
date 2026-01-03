import uuid
from pathlib import Path

from app.application.ports import ImageRepositoryPort


class LocalFileSystemImageRepository(ImageRepositoryPort):

    def __init__(self, storage_path: str = "uploads/images"):
        self.storage_path = Path(storage_path)
        self.storage_path.mkdir(parents=True, exist_ok=True)

    def save(self, image: bytes) -> str:
        image_id = f"{uuid.uuid4()}.jpg"  # Tu peux détecter l'extension si besoin
        file_path = self.storage_path / image_id

        with open(file_path, "wb") as f:
            f.write(image)

        return image_id  # ou return str(file_path) si tu veux le chemin complet

    def get(self, image_id: str) -> bytes:
        file_path = self.storage_path / image_id

        if not file_path.exists():
            raise FileNotFoundError(f"Image {image_id} not found")

        with open(file_path, "rb") as f:
            return f.read()

    def delete(self, image_id: str) -> bool:
        file_path = self.storage_path / image_id

        if file_path.exists():
            file_path.unlink()
            return True
        return False
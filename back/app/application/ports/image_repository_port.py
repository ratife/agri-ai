from typing import Protocol


class ImageRepositoryPort(Protocol):

    def save(self, image: bytes) -> str:
        """Sauvegarde une image et retourne son identifiant."""
        ...

    def get(self, image_id: str) -> bytes:
        """Récupère une image par son ID."""
        ...

    def delete(self, image_id: str) -> bool:
        """Supprime une image."""
        ...
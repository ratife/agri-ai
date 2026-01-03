class ImageData:
    def __init__(self, bytes_data: bytes):
        if not bytes_data:
            raise ValueError("Image is empty")
        self.bytes = bytes_data
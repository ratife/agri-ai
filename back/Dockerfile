FROM python:3.11-slim


# Définir le répertoire de travail
WORKDIR /apps
RUN python3 -m venv .venv

COPY requirements.txt .
RUN .venv/bin/pip install --no-cache-dir -r requirements.txt --index-url https://pypi.org/simple
#RUN pip install python-multipart
RUN pip install --upgrade pip

copy .env .env

COPY app/ app/

# Définir la commande de lancement
CMD [".venv/bin/uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
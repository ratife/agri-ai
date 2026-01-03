.PHONY: env install start build up down logs

# Création de l'environnement virtuel
env:
	python3 -m venv .venv

# Installation des dépendances
install:
	.venv/bin/pip install -r requirements.txt

# Lancer l'application
start:
	.venv/bin/uvicorn app.main:app --reload

# Docker
build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

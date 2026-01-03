from fastapi import FastAPI
from app.api.routers import api_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Agri AI",
    description="AI for agriculture diagnostics",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.connection import Base, engine

# Routers
from app.routers.environment import router as environment_router
from app.routers.environment_override import router as override_router
from app.routers.evaluation import router as evaluation_router
from app.routers.feature_flag import router as feature_flag_router
from app.routers.user import router as user_router

# New Routers
from app.routers.user_group_router import router as group_router
from app.routers.targeting_rule_router import router as targeting_rule_router
from app.routers.dashboard import router as dashboard_router


Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Feature Management and Release Control System",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Existing Routers
app.include_router(feature_flag_router)
app.include_router(environment_router)
app.include_router(override_router)
app.include_router(evaluation_router)
app.include_router(user_router)

# New Routers
app.include_router(group_router)
app.include_router(targeting_rule_router)

app.include_router(dashboard_router)


@app.get("/")
def root():
    return {
        "message": "Feature Management and Release Control System API is Running 🚀"
    }
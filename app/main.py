from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

print("🔥 LOADED MAIN.PY FROM:", __file__)

# ==========================
# Middleware
# ==========================
from app.middleware.feature_flag_middleware import FeatureFlagMiddleware

# ==========================
# Routers
# ==========================
from app.routers.analytics import router as analytics_router
from app.routers.audit_log import router as audit_log_router
from app.routers.auth import router as auth_router
from app.routers.dashboard import router as dashboard_router
from app.routers.environment import router as environment_router
from app.routers.environment_override import (
    router as environment_override_router,
)
from app.routers.evaluation import router as evaluation_router
from app.routers.feature_flag import router as feature_flag_router
from app.routers.targeting_rule_router import (
    router as targeting_rule_router,
)
from app.routers.user import router as user_router
from app.routers.user_group_router import (
    router as user_group_router,
)

# ==========================
# FastAPI App
# ==========================
app = FastAPI(
    title="Feature Management and Release Control System",
    version="1.0.0",
)

# ==========================
# Middleware
# ==========================
app.add_middleware(FeatureFlagMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# Root Endpoint
# ==========================
@app.get("/")
def root():
    return {
        "message": "Feature Management and Release Control System API",
        "version": "1.0.0",
        "status": "Running",
    }

# ==========================
# Register Routers
# ==========================
print("🔥 Registering Routers...")

app.include_router(auth_router)
app.include_router(feature_flag_router)
app.include_router(environment_router)
app.include_router(environment_override_router)
app.include_router(evaluation_router)
app.include_router(targeting_rule_router)
app.include_router(user_router)
app.include_router(user_group_router)
app.include_router(audit_log_router)
app.include_router(analytics_router)
app.include_router(dashboard_router)

print("✅ All routers registered.")

# ==========================
# Print All Routes
# ==========================

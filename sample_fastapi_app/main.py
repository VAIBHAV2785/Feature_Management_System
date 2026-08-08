from fastapi import FastAPI, Request

from feature_flag_sdk.middleware import FeatureFlagMiddleware

app = FastAPI(
    title="SDK Demo Application"
)

app.add_middleware(
    FeatureFlagMiddleware
)


@app.get("/")
def home(request: Request):

    enabled = request.state.flag_client.is_enabled(
        flag_key="new_dashboard",
        user_id="user101",
        environment="Production",
    )

    return {
        "message": "SDK Working!",
        "new_dashboard": enabled,
    }


@app.get("/profile")
def profile(request: Request):

    enabled = request.state.flag_client.is_enabled(
        flag_key="new_dashboard",
        user_id="user101",
        environment="Production",
    )

    if enabled:

        return {
            "version": "New Dashboard"
        }

    return {
        "version": "Old Dashboard"
    }
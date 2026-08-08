from starlette.middleware.base import BaseHTTPMiddleware

from feature_flag_sdk.client import FeatureFlagClient


class FeatureFlagMiddleware(BaseHTTPMiddleware):
    """
    Middleware that attaches the Feature Flag SDK client
    to every incoming request.
    """

    async def dispatch(
        self,
        request,
        call_next,
    ):

        # Attach SDK client
        request.state.flag_client = FeatureFlagClient()

        response = await call_next(request)

        return response
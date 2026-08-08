import requests

from feature_flag_sdk.config import SDKConfig
from feature_flag_sdk.cache import get, set
from feature_flag_sdk.exceptions import (
    APIConnectionError,
    InvalidResponseError,
)
from feature_flag_sdk.utils import build_cache_key


class FeatureFlagClient:
    """
    Python SDK Client for Feature Management System.
    """

    def __init__(self):

        self.base_url = SDKConfig.API_URL
        self.api_key = SDKConfig.API_KEY
        self.timeout = SDKConfig.REQUEST_TIMEOUT

    # =====================================================
    # Evaluate Feature Flag
    # =====================================================

    def evaluate(
        self,
        flag_key: str,
        user_id: str,
        environment: str = "Production",
    ):

        cache_key = build_cache_key(
            flag_key,
            user_id,
            environment,
        )

        # -----------------------------------------
        # Check Local Cache
        # -----------------------------------------

        cached = get(cache_key)

        if cached is not None:

            print("✅ SDK Cache Hit")

            return cached

        print("🌐 Calling Feature Flag API...")

        url = f"{self.base_url}/evaluate/"

        payload = {
            "flag_key": flag_key,
            "user_id": user_id,
            "environment": environment,
        }

        headers = {
            "X-API-KEY": self.api_key,
            "Content-Type": "application/json",
        }

        try:

            response = requests.post(
                url,
                json=payload,
                headers=headers,
                timeout=self.timeout,
            )

            if response.status_code != 200:

                raise InvalidResponseError(
                    f"Status Code : {response.status_code}\n"
                    f"{response.text}"
                )

            data = response.json()

            # Save result into local cache
            set(
                cache_key,
                data,
            )

            return data

        except requests.exceptions.RequestException as exc:

            print("⚠ Unable to connect to Feature Flag API.")

            cached = get(cache_key)

            if cached is not None:

                print("✅ Returning Cached Value")

                return cached

            print("⚠ Returning Default Value")

            return {
                "flag_key": flag_key,
                "enabled": False,
                "bucket": -1,
                "rollout_percentage": 0,
                "reason": "default_fallback",
            }

        except InvalidResponseError as exc:

            print("⚠ Invalid API Response")

            cached = get(cache_key)

            if cached is not None:

                print("✅ Returning Cached Value")

                return cached

            return {
                "flag_key": flag_key,
                "enabled": False,
                "bucket": -1,
                "rollout_percentage": 0,
                "reason": "default_fallback",
            }

    # =====================================================
    # Boolean Helper
    # =====================================================

    def is_enabled(
        self,
        flag_key: str,
        user_id: str,
        environment: str = "Production",
    ) -> bool:

        result = self.evaluate(
            flag_key=flag_key,
            user_id=user_id,
            environment=environment,
        )

        return result.get("enabled", False)

    # =====================================================
    # Clear SDK Cache (Optional)
    # =====================================================

    def clear_cache(self):

        from feature_flag_sdk.cache import clear

        clear()

        print("✅ SDK Cache Cleared")
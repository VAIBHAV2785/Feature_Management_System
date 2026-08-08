import os


class SDKConfig:

    API_URL = os.getenv(
        "FLAG_API_URL",
        "http://localhost:8000"
    )

    API_KEY = os.getenv(
        "API_KEY",
        ""
    )

    CACHE_TTL = int(
        os.getenv(
            "CACHE_TTL",
            "60"
        )
    )

    REQUEST_TIMEOUT = int(
        os.getenv(
            "REQUEST_TIMEOUT",
            "5"
        )
    )
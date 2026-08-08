<<<<<<< HEAD
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://postgres:vai123@localhost/feature_management"
)

SECRET_KEY = os.getenv(
    "SECRET_KEY",
    "THIS_IS_A_LONG_RANDOM_SECRET_KEY_CHANGE_ME"
)

ALGORITHM = os.getenv(
    "ALGORITHM",
    "HS256"
)

ACCESS_TOKEN_EXPIRE_MINUTES = int(
    os.getenv(
        "ACCESS_TOKEN_EXPIRE_MINUTES",
        "60",
    )
)
=======
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
APP_NAME = os.getenv("APP_NAME")
DEBUG = os.getenv("DEBUG")
>>>>>>> bcd60838 (MILESTONE 2)

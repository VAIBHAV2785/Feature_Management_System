from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
APP_NAME = os.getenv("APP_NAME")
DEBUG = os.getenv("DEBUG")
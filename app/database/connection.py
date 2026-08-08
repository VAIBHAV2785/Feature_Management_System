from sqlalchemy import create_engine
<<<<<<< HEAD
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
=======
from sqlalchemy.orm import sessionmaker, declarative_base
>>>>>>> bcd60838 (MILESTONE 2)

from app.core.config import DATABASE_URL

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
<<<<<<< HEAD
    bind=engine,
)

Base = declarative_base()


=======
    bind=engine
)

Base = declarative_base()
>>>>>>> bcd60838 (MILESTONE 2)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
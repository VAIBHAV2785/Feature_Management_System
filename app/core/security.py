from datetime import datetime, timedelta
<<<<<<< HEAD

from jose import jwt, JWTError
from passlib.context import CryptContext

from app.core.config import (
    SECRET_KEY,
    ALGORITHM,
    ACCESS_TOKEN_EXPIRE_MINUTES,
)

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto",
)


# ==========================================
# Password Hashing
# ==========================================

=======
from jose import jwt
from passlib.context import CryptContext

SECRET_KEY = "feature_management_secret_key"

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


>>>>>>> bcd60838 (MILESTONE 2)
def hash_password(password: str):
    return pwd_context.hash(password)


<<<<<<< HEAD
def verify_password(
    plain_password: str,
    hashed_password: str,
):
    return pwd_context.verify(
        plain_password,
        hashed_password,
    )


# ==========================================
# JWT Token
# ==========================================

=======
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(
        plain_password,
        hashed_password
    )


>>>>>>> bcd60838 (MILESTONE 2)
def create_access_token(data: dict):

    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

<<<<<<< HEAD
    to_encode.update(
        {"exp": expire}
    )
=======
    to_encode.update({"exp": expire})
>>>>>>> bcd60838 (MILESTONE 2)

    return jwt.encode(
        to_encode,
        SECRET_KEY,
<<<<<<< HEAD
        algorithm=ALGORITHM,
    )


def verify_token(token: str):

    try:

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM],
        )

        return payload

    except JWTError:
        return None
=======
        algorithm=ALGORITHM
    )
>>>>>>> bcd60838 (MILESTONE 2)

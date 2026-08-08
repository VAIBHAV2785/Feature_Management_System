import redis

redis_client = redis.Redis(
    host="localhost",
    port=6379,
    db=0,
<<<<<<< HEAD
    decode_responses=False,
=======
    decode_responses=True
>>>>>>> bcd60838 (MILESTONE 2)
)
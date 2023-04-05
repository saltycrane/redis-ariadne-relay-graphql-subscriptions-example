import asyncio

from ariadne import SubscriptionType
from redis import Redis

REDIS_HOST = "localhost"
REDIS_PORT = 6379
REDIS_QUEUE_NAME = "my-redis-queue"

r = Redis(host=REDIS_HOST, port=REDIS_PORT, decode_responses=True)

subscription = SubscriptionType()


@subscription.source("message")
async def message_source(*_):
    while True:
        await asyncio.sleep(0.1)
        value = r.rpop(REDIS_QUEUE_NAME)
        if value:
            print("Got value from redis:", value)
            yield value


@subscription.field("message")
def message_resolver(value, *_):
    return value

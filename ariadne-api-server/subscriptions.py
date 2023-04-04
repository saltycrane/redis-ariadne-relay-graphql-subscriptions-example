import asyncio

from ariadne import SubscriptionType

subscription = SubscriptionType()


@subscription.source("counter")
async def counter_source(*_):
    for i in range(5):
        await asyncio.sleep(1)
        yield i


@subscription.field("counter")
def counter_resolver(count, *_):
    return count + 1

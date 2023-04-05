# redis-ariadne-relay-graphql-subscriptions-example

## Redis

- Install Redis

- Start the Redis CLI

    ``` sh
    redis-cli
    ```

- Add some values to the queue

    ``` sh
    127.0.0.1:6379> lpush my-redis-queue 1
    (integer) 1
    127.0.0.1:6379> lpush my-redis-queue 2
    (integer) 1
    127.0.0.1:6379> lpush my-redis-queue 3
    (integer) 1
    ```

## Ariadne API server

- Install

    ``` sh
    cd ariadne-api-server
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements-lock.txt
    ```

- Start the server

    ``` sh
    uvicorn app:app --reload
    ```

- Go to http://localhost:8000/ in the browser

- Enter the following query

    ``` graphql
    subscription {
      message
    }
    ```

- Click the button to execute the query

- Add more values to the Redis queue

# redis-ariadne-relay-graphql-subscriptions-example

Example [Python](https://www.python.org/) [Ariadne](https://ariadnegraphql.org/) GraphQL API server and [React](https://react.dev/) [Relay](https://relay.dev/) webapp demonstrating [GraphQL Subscriptions](https://graphql.org/blog/subscriptions-in-graphql-and-relay/). Messages entered into a [Redis](https://redis.io/) queue are displayed as notifications in the browser in real time.

## Redis queue

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

## Python Ariadne GraphQL API server

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

- Note: the URL used for Subscriptions is ws://localhost:8000/

## Next.js React Relay webapp

- Install

    ``` sh
    cd react-relay-webapp
    npm install
    ```
- Start Relay compiler and Next.js dev server

    ``` sh
    npm run dev
    ```

- Go to http://localhost:3000 in the browser

- Add more values to the Redis queue and see notifications in the browser

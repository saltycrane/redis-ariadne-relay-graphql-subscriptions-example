import {
  Environment,
  Network,
  Observable,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";
import { SubscriptionClient } from "subscriptions-transport-ws";

function fetchQuery(request: RequestParameters, variables: Variables) {
  return fetch("/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const subscriptionClient = new SubscriptionClient("ws://localhost:8000", {
  reconnect: true,
});

function subscribe(request: RequestParameters, variables: Variables) {
  const subscribeObservable = subscriptionClient.request({
    query: request.text,
    operationName: request.name,
    variables,
  });
  return Observable.from(subscribeObservable as any);
}

const network = Network.create(fetchQuery, subscribe);

const store = new Store(new RecordSource());

export const environment = new Environment({
  network,
  store,
});

/**
 * @generated SignedSource<<0c65cebe955556343b92cfcb5300bf1d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type NotificationsSubscription$variables = {};
export type NotificationsSubscription$data = {
  readonly message: string | null;
};
export type NotificationsSubscription = {
  response: NotificationsSubscription$data;
  variables: NotificationsSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NotificationsSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NotificationsSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7ad0e68ba1679b3f6cef52f15876d5b8",
    "id": null,
    "metadata": {},
    "name": "NotificationsSubscription",
    "operationKind": "subscription",
    "text": "subscription NotificationsSubscription {\n  message\n}\n"
  }
};
})();

(node as any).hash = "a0e955b7eaaeefe61a1952d11f062224";

export default node;

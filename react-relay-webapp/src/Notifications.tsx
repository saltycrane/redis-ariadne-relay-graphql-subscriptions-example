import { useMemo, useState } from "react";
import { graphql, useSubscription } from "react-relay";

import { NotificationsSubscription } from "./__generated__/NotificationsSubscription.graphql";
import Notification from "./Notification";

export default function Notifications() {
  const [message, setMessage] = useState("");

  useSubscription<NotificationsSubscription>(
    useMemo(
      () => ({
        subscription: graphql`
          subscription NotificationsSubscription {
            message
          }
        `,
        variables: {},
        onNext: (response) => {
          console.log("Got value from GraphQL API server:", response);
          setMessage(response.message);
        },
      }),
      [],
    ),
  );

  return (
    <>
      <h4>Waiting for messages...</h4>
      <Notification message={message} />
    </>
  );
}

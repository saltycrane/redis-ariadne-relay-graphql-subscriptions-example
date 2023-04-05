import { RelayEnvironmentProvider } from "react-relay";

import Notifications from "./Notifications";
import { environment } from "./relay";

export default function IndexPage() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="align-items-center bg-dark d-flex flex-column h-100 justify-content-center text-light">
        <Notifications />
      </div>
    </RelayEnvironmentProvider>
  );
}

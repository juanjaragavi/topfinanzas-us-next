declare module "@builder.io/partytown/react" {
  import * as React from "react";

  interface PartytownProps {
    /** Array of main-thread APIs to forward to the web worker */
    forward?: string[];
    /** Called for each URL to determine if it should be proxied */
    resolveUrl?: (
      url: URL,
      location: URL,
      type: string,
    ) => URL | undefined | null;
    /** Set the Partytown lib path */
    lib?: string;
    /** Debug mode */
    debug?: boolean;
    /** Called when a log event is triggered */
    logScriptExecution?: boolean;
    /** Called when a log event is triggered */
    logSendBeaconRequests?: boolean;
  }

  export const Partytown: React.FC<PartytownProps>;
}

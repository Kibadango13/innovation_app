import React from "react";
import bugsnag from "@bugsnag/expo";
import bugsnagReact from "@bugsnag/plugin-react";

import CONSTANTS from "config/constants";
import appJSON from "../../app.json";
import env from "../../env";

let bugsnagClient: any = null;
let ErrorBoundary: any = null;

const environment = env.ENV as string;
const includedEnv = CONSTANTS.INCLUDED_LOGGER_ENVS.includes(environment);
// Do something with response error
if (includedEnv) {
  bugsnagClient = bugsnag({
    appVersion: appJSON.expo.version,
    notifyReleaseStages: CONSTANTS.INCLUDED_LOGGER_ENVS,
    metaData: {
      client: CONSTANTS.CLIENT_NAME,
      project: appJSON.expo.name,
      version: appJSON.expo.version,
      env: env.ENV
    }
  });

  bugsnagClient.use(bugsnagReact, React);
  ErrorBoundary = bugsnagClient.getPlugin("react");
}

export default bugsnagClient;
export { ErrorBoundary };

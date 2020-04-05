import React from "react";
import { Provider } from "react-redux";
import { registerRootComponent } from "expo";
import "i18n/i18n";

import { AppProps as Props } from "./App.types";
// import { ErrorBoundary } from "utils/bugsnag";
// import CONSTANTS from "config/constants";
import store from "redux/store";
import ThemeProviderContainer from "../ThemeProviderContainer/ThemeProviderContainer";
import Navigator from "navigation/Navigator";
// import env from "../../../env";

const App: React.FC<Props> = props => {
  // const environment = env.ENV;
  // const includedEnv = CONSTANTS.INCLUDED_LOGGER_ENVS.includes(environment);

  const app = (
    <Provider store={store}>
      <ThemeProviderContainer>
        <Navigator />
      </ThemeProviderContainer>
    </Provider>
  );

  // return includedEnv ? <ErrorBoundary>{app}</ErrorBoundary> : app;
  return app;
};

export { App };
export default registerRootComponent(App);

import React from "react";
import { Provider } from "react-redux";
// import { I18nextProvider } from "react-i18next";
import { registerRootComponent } from "expo";

import { AppProps as Props } from "./App.types";
// import { ErrorBoundary } from "util/bugsnag";
// import CONSTANTS from "config/constants";
// import i18n from "i18n/i18n";
import store from "redux/store";
import ThemeProviderContainer from "../ThemeProviderContainer/ThemeProviderContainer";
import Intro from "components/Intro/Intro";
// import env from "../../../env";

const App: React.FC<Props> = props => {
  // const environment = env.ENV;
  // const includedEnv = CONSTANTS.INCLUDED_LOGGER_ENVS.includes(environment);

  const app = (
    // <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ThemeProviderContainer>
        <Intro />
      </ThemeProviderContainer>
    </Provider>
    // </I18nextProvider>
  );

  // return includedEnv ? <ErrorBoundary>{app}</ErrorBoundary> : app;
  return app;
};

export default registerRootComponent(App);

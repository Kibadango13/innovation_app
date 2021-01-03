import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { registerRootComponent, AppLoading } from "expo";
import faker from "faker";
import { ReactQueryConfigProvider } from "react-query";
import moment from "moment";
import "moment/locale/es";

import { AppProps as Props } from "./App.types";
import { ErrorBoundary } from "utils/bugsnag";
import CONSTANTS from "config/constants";
import store from "redux/store";
import ThemeProviderContainer from "../ThemeProviderContainer/ThemeProviderContainer";
import Navigator from "navigation/Navigator";
import { loadFonts } from "@utils/fonts";
import "i18n/i18n";
import env from "../../../env";

const App: React.FC<Props> = props => {
  const environment = env.ENV;
  const includedEnv = CONSTANTS.INCLUDED_LOGGER_ENVS.includes(environment);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const lang = CONSTANTS.COUNTRY.LANGUAGE;
    moment.locale(lang);
    faker.locale = lang;
  }, []);

  if (!loaded) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setLoaded(true)} />
    );
  }
  const app = (
    <ReactQueryConfigProvider config={CONSTANTS.REACT_QUERY_CONFIG}>
      <Provider store={store}>
        <ThemeProviderContainer>
          <Navigator />
        </ThemeProviderContainer>
      </Provider>
    </ReactQueryConfigProvider>
  );

  return includedEnv ? <ErrorBoundary>{app}</ErrorBoundary> : app;
};

export { App };
export default registerRootComponent(App);

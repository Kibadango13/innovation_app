import "jest-axe/extend-expect";
import "jest-styled-components";

import React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import {
  render as rtlRender,
  RenderOptions as rtlRenderOptions
} from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import appStore from "redux/store";
import themes from "styles/theme";

interface RenderOptions extends Omit<rtlRenderOptions, "queries"> {
  // Redux store
  store?: Store<any>;
  // Styles theme
  theme?: typeof themes.defaultTheme;
}

interface WrapperProps {
  children?: HTMLElement;
}

export const render = (ui: React.ReactElement, options: RenderOptions = {}) => {
  const {
    store = appStore,
    theme = themes.defaultTheme,
    ...returnOptions
  } = options;
  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = props => {
    const { children } = props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  };
  // Return renderer function with base options set
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...returnOptions }),
    store
  };
};

// re-export everything
export * from "@testing-library/react-native";

interface Cases {
  [key: string]: string | number | boolean | undefined | null;
}

export const casify = (cases: Cases) => {
  return Object.entries(cases).map(([caseTitle, testValue], index: number) => {
    return {
      name: `${index + 1}. ${caseTitle} - ${testValue}`,
      testValue
    };
  });
};

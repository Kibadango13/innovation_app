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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ReactQueryConfigProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

import appStore from "redux/store";
import themes from "styles/theme";
import CONSTANTS from "@config/constants";

interface RenderOptions extends Omit<rtlRenderOptions, "queries"> {
  // Redux store
  store?: Store<any>;
  // Styles theme
  theme?: typeof themes.defaultTheme;
}

interface WrapperProps {
  children?: HTMLElement;
}

const Stack = createStackNavigator();

export const render = (ui: React.ReactElement, options: RenderOptions = {}) => {
  const { store = appStore, ...returnOptions } = options;

  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = props => {
    const { children } = props;
    const Screen = () => <View>{children}</View>;
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Screen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  };
  // Return renderer function with base options set
  return {
    ...appRender(ui, { wrapper: Wrapper, ...returnOptions }),
    store
  };
};

export const appRender = (
  ui: React.ReactElement,
  options: RenderOptions = {}
) => {
  const {
    store = appStore,
    theme = themes.defaultTheme,
    wrapper,
    ...returnOptions
  } = options;
  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = props => {
    const { children } = props;
    const InnerWrapper = wrapper ? wrapper : (props: any) => props.children;
    return (
      <ReactQueryConfigProvider config={CONSTANTS.REACT_QUERY_CONFIG}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <InnerWrapper>{children}</InnerWrapper>
          </ThemeProvider>
        </Provider>
      </ReactQueryConfigProvider>
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

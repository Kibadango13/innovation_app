// React navigation builders
import {
  NavigationAction,
  StackNavigationState,
  PartialState
} from "@react-navigation/native";
import {
  StackNavigationProp,
  StackNavigationOptions
} from "@react-navigation/stack";
import { ServerErrorParams } from "screens/ServerError/ServerError.screen.types";

export const buildRoute = <T>(overrides: Partial<T> = {}) => {
  return {
    key: "",
    name: "",
    params: {},
    ...overrides
  };
};

export const buildStackNavigation = (
  overrides: Partial<StackNavigationProp<any, any>> = {}
) => {
  return {
    dispatch: (
      action:
        | NavigationAction
        | ((state: StackNavigationState) => NavigationAction)
    ) => {},
    navigate: (
      route:
        | { key: string; params?: any }
        | { name: any; key?: string | undefined; params: any }
    ) => {},
    reset: (
      state: StackNavigationState | PartialState<StackNavigationState>
    ) => {},
    goBack: () => {},
    isFocused: () => true,
    canGoBack: () => false,
    setParams: (params: Partial<ServerErrorParams>) => {},
    setOptions: (options: Partial<StackNavigationOptions>) => {},
    dangerouslyGetParent: (() => {}) as any,
    dangerouslyGetState: () => ({} as StackNavigationState),
    addListener: (() => {}) as any,
    removeListener: (() => {}) as any,
    replace: (() => {}) as any,
    push: (() => {}) as any,
    pop: (() => {}) as any,
    popToTop: (() => {}) as any,
    ...overrides
  };
};

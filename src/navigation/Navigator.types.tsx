// Navigator types and interfaces
import { MainTabsNavigatorScreens } from "./MainTabsNavigator/MainTabsNavigator.types";
import { ServerErrorParams } from "screens/ServerError/ServerError.screen.types";

// Component props
export interface NavigatorProps {}

// Navigator screens and screens params
export type NavigatorScreens = {
  Home: MainTabsNavigatorScreens;
  ServerError: ServerErrorParams;
};

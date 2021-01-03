// Interfaces and types from component HomeScreen
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { HomeTabNavigatorScreens as NavigatorScreens } from "navigation/MainTabsNavigator/HomeTabNavigator/HomeTabNavigator.types";

// Component Props
export interface HomeScreenProps {
  navigation: HomeScreenNavigation;
  route: HomeScreenRoute;
}

// Screen params
export interface HomeScreenParams {}

// Screen navigation type
export type HomeScreenNavigation = StackNavigationProp<
  NavigatorScreens,
  "Home"
>;

// Screen route type
export type HomeScreenRoute = RouteProp<NavigatorScreens, "Home">;

// Styled Component Props
export interface HomeScreenStyledProps {}

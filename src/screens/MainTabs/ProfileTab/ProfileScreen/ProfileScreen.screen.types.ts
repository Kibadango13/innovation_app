// Interfaces and types from component ProfileScreen
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ProfileTabNavigatorScreens as NavigatorScreens } from "navigation/MainTabsNavigator/ProfileTabNavigator/ProfileTabNavigator.types";

// Component Props
export interface ProfileScreenProps {
  navigation: ProfileScreenNavigation;
  route: ProfileScreenRoute;
}

// Screen params
export interface ProfileScreenParams {}

// Screen navigation type
export type ProfileScreenNavigation = StackNavigationProp<
  NavigatorScreens,
  "Profile"
>;

// Screen route type
export type ProfileScreenRoute = RouteProp<NavigatorScreens, "Profile">;

// Styled Component Props
export interface ProfileScreenStyledProps {}

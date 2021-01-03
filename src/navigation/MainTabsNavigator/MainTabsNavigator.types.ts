// Interfaces and types for component MainTabsNavigator
import { HomeTabNavigatorScreens } from "./HomeTabNavigator/HomeTabNavigator.types";
import { ProfileTabNavigatorScreens } from "./ProfileTabNavigator/ProfileTabNavigator.types";
// Component Props
export interface MainTabsNavigatorProps {}

export interface MainNavigatorStyledProps {
  className: string;
}

export interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}

// Navigator screens and screens params
export type MainTabsNavigatorScreens = {
  HomeTab: HomeTabNavigatorScreens;
  ProfileTab: ProfileTabNavigatorScreens;
};

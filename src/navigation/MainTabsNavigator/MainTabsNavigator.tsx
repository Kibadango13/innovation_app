import React, { useContext } from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "styled-components/native";

import HomeTabNavigator from "./HomeTabNavigator/HomeTabNavigator";
import ProfileTabNavigator from "./ProfileTabNavigator/ProfileTabNavigator";
import { MainTabsNavigatorProps as Props } from "./MainTabsNavigator.types";
import { MainTabsNavigatorScreens as NavigatorScreens } from "./MainTabsNavigator.types";
import { renderIcon } from "./MainTabsNavigator.helpers";
import { NativeStyles, TabsBar } from "./MainTabsNavigator.styles";

const Tabs = createBottomTabNavigator<NavigatorScreens>();

const MainTabsNavigator: React.FC<Props> = props => {
  const theme = useContext(ThemeContext);
  const { palette } = theme;
  const { grey, white } = palette;
  const { tabStyle } = NativeStyles;
  const paddingBottom = Platform.OS === "ios" ? 88 : 72;
  const iosBar = {
    paddingBottom,
    backgroundColor: white[0]
  };

  return (
    <Tabs.Navigator
      tabBarOptions={{
        //activeTintColor: red,
        inactiveTintColor: grey[3],
        style: Platform.OS === "android" ? TabsBar : iosBar,
        tabStyle
      }}
    >
      <Tabs.Screen
        name="HomeTab"
        component={HomeTabNavigator}
        options={({ route }) => {
          const routeState: any = (route as any).state;
          const routes = routeState?.routes;
          const routeIndex = routeState?.index;
          const exist = !!routes && typeof routeIndex !== "undefined";
          const routeName = exist ? routes[routeIndex]?.name : "";
          return {
            tabBarIcon: props => renderIcon(0, props, theme),
            tabBarVisible: routeName !== "Details",
            title: "Sala"
          };
        }}
      />
      <Tabs.Screen
        name="ProfileTab"
        component={ProfileTabNavigator}
        options={({ route }) => {
          const routeState: any = (route as any).state;
          const routes = routeState?.routes;
          const routeIndex = routeState?.index;
          const exist = !!routes && typeof routeIndex !== "undefined";
          const routeName = exist ? routes[routeIndex]?.name : "";
          return {
            tabBarIcon: props => renderIcon(1, props, theme),
            tabBarVisible: routeName !== "Details",
            title: "Profile"
          };
        }}
      />
    </Tabs.Navigator>
  );
};

MainTabsNavigator.defaultProps = {};

export default MainTabsNavigator;

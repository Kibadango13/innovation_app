import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "screens/MainTabs/HomeTab/HomeScreen/HomeScreen.screen";
import { HomeTabNavigatorProps as Props } from "./HomeTabNavigator.types";
import { HomeTabNavigatorScreens as NavigatorScreens } from "./HomeTabNavigator.types";

const Stack = createStackNavigator<NavigatorScreens>();

const HomeTabNavigator: React.FC<Props> = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

HomeTabNavigator.defaultProps = {};

export default HomeTabNavigator;

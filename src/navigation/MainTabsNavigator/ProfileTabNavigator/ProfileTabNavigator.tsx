import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "screens/MainTabs/ProfileTab/ProfileScreen/ProfileScreen.screen";
import { ProfileTabNavigatorProps as Props } from "./ProfileTabNavigator.types";
import { ProfileTabNavigatorScreens as NavigatorScreens } from "./ProfileTabNavigator.types";

const Stack = createStackNavigator<NavigatorScreens>();

const ProfileTabNavigator: React.FC<Props> = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

ProfileTabNavigator.defaultProps = {};

export default ProfileTabNavigator;

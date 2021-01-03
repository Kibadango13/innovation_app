import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigatorProps as Props, NavigatorScreens } from "./Navigator.types";
import MainTabNavigator from "./MainTabsNavigator/MainTabsNavigator";
import ServerError from "screens/ServerError/ServerError.screen";
import { isLoggedIn } from "@redux/auth/auth.actions";
import { useDispatch } from "@redux/store";
import { createRef } from "react";

const Stack = createStackNavigator<NavigatorScreens>();

const Navigator: React.FC<Props> = props => {
  const navigationRef = createRef<NavigationContainerRef>();
  const dispatch = useDispatch();
  //const loggedIn = useSelector(state => state.Auth.loggedIn);

  useEffect(() => {
    dispatch(isLoggedIn());
  }, [dispatch]);

  // if (typeof loggedIn === "undefined") {
  //   return null;
  // }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {/* {loggedIn ? (
          <Stack.Screen name="Home" component={MainTabNavigator} />
        ) : null} */}
        <Stack.Screen name="Home" component={MainTabNavigator} />
        <Stack.Screen
          name="ServerError"
          component={ServerError}
          options={{ title: "Oops Something went wrong" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

Navigator.defaultProps = {};

export default Navigator;

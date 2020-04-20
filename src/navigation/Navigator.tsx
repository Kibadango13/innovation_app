import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigatorProps as Props, NavigatorScreens } from "./Navigator.types";
import Home from "screens/Home/Home.screen";
import ServerError from "screens/ServerError/ServerError.screen";
import { isLoggedIn } from "@redux/auth/auth.actions";
import { useDispatch, useSelector } from "@redux/store";

const Stack = createStackNavigator<NavigatorScreens>();

const Navigator: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.Auth.loggedIn);

  useEffect(() => {
    dispatch(isLoggedIn());
  }, [dispatch]);

  if (typeof loggedIn === "undefined") {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Trade" }}
            />
            <Stack.Screen
              name="ServerError"
              component={ServerError}
              options={{ title: "Oops Something went wrong" }}
            />
          </>
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

Navigator.defaultProps = {};

export default Navigator;

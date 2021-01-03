import React from "react";
import { Text } from "react-native";

import Styles from "./HomeScreen.screen.styles";
import { HomeScreenProps as Props } from "./HomeScreen.screen.types";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const HomeScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <Styles>
        <Text>Hello world</Text>
      </Styles>
    </ScreenTemplate>
  );
};

HomeScreen.defaultProps = {};

export default HomeScreen;

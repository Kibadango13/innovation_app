import React from "react";
import { Text } from "react-native";

import Styles from "./ProfileScreen.screen.styles";
import { ProfileScreenProps as Props } from "./ProfileScreen.screen.types";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const ProfileScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <Styles>
        <Text>ProfileScreen</Text>
      </Styles>
    </ScreenTemplate>
  );
};

ProfileScreen.defaultProps = {};

export default ProfileScreen;

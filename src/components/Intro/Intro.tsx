import React from "react";
import { Text, View } from "react-native";

import Styles from "./Intro.styles";
import { IntroProps as Props } from "./Intro.types";

import appJson from "../../../app.json";

const Intro: React.FC<Props> = props => {
  return (
    <Styles>
      <Text>React native boilerplate</Text>
      <Text>v{appJson.expo.version}</Text>
    </Styles>
  );
};

Intro.defaultProps = {};

export default Intro;

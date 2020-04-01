import React from "react";
import { Text } from "react-native";

import Styles, { Title } from "./Intro.styles";
import { IntroProps as Props } from "./Intro.types";

import appJson from "../../../app.json";

const Intro: React.FC<Props> = props => {
  return (
    <Styles>
      <Title>React native boilerplate</Title>
      <Text>v{appJson.expo.version}</Text>
    </Styles>
  );
};

Intro.defaultProps = {};

export default Intro;

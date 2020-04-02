import React from "react";

import Styles, { Title, Version } from "./Intro.styles";
import { IntroProps as Props } from "./Intro.types";

import appJson from "../../../app.json";

const Intro: React.FC<Props> = props => {
  return (
    <Styles>
      <Title>React native boilerplate</Title>
      <Version>v{appJson.expo.version}</Version>
    </Styles>
  );
};

Intro.defaultProps = {};

export default Intro;

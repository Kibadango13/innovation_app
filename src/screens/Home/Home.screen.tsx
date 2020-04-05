import React from "react";

import Styles from "./Home.screen.styles";
import { HomeProps as Props } from "./Home.screen.types";
import Intro from "@components/Intro/Intro";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const Home: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <Styles>
        <Intro />
      </Styles>
    </ScreenTemplate>
  );
};

Home.defaultProps = {};

export default Home;

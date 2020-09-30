import React from "react";

import Styles from "./Home.screen.styles";
import { HomeProps as Props } from "./Home.screen.types";
import Intro from "@components/Intro/Intro";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";
import ErrorBoundry from "@components/global/ErrorBoundry/ErrorBoundry";

const Home: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <Styles>
        <ErrorBoundry>
          <Intro />
        </ErrorBoundry>
      </Styles>
    </ScreenTemplate>
  );
};

Home.defaultProps = {};

export default Home;

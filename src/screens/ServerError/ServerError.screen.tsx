import React from "react";

import Styles from "./ServerError.screen.styles";
import { ServerErrorProps as Props } from "./ServerError.screen.types";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";
import Button from "@components/global/Button/Button";

const ServerError: React.FC<Props> = props => {
  const { children, navigation } = props;

  const retry = () => {
    navigation.navigate("Home");
  };

  return (
    <ScreenTemplate>
      <Styles>{children}</Styles>
      <Button onPress={retry}>Reintentar</Button>
    </ScreenTemplate>
  );
};

ServerError.defaultProps = {};

export default ServerError;

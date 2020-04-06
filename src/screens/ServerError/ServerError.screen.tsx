import React from "react";

import Styles, { ServerErrorSVG } from "./ServerError.screen.styles";
import { ServerErrorProps as Props } from "./ServerError.screen.types";
import Button from "@components/global/Button/Button";
import theme from "styles/theme/default";

const ServerError: React.FC<Props> = props => {
  const { navigation, resetError } = props;

  const retry = () => {
    if (resetError) {
      resetError();
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <Styles>
      <ServerErrorSVG
        fill={theme.palette.primary}
        stroke={theme.palette.primary}
      />
      <Button onPress={retry}>Reintentar</Button>
    </Styles>
  );
};

ServerError.defaultProps = {};

export default ServerError;

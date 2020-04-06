import React from "react";
import ErrorBoundaryLib from "react-native-error-boundary";

import ServerError from "@screens/ServerError/ServerError.screen";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ServerErrorNavigation,
  ServerErrorRoute
} from "@screens/ServerError/ServerError.screen.types";
import { ErrorBoundryProps as Props } from "./ErrorBoundry.types";

const ErrorBoundry: React.FC<Props> = props => {
  const navigation = useNavigation<ServerErrorNavigation>();
  const route = useRoute<ServerErrorRoute>();
  type FallbackProps = { error: Error; resetError: () => void };
  const Fallback = (props: FallbackProps) => (
    <ServerError {...props} navigation={navigation} route={route} />
  );
  return (
    <ErrorBoundaryLib FallbackComponent={Fallback}>
      {props.children}
    </ErrorBoundaryLib>
  );
};

ErrorBoundry.defaultProps = {};

export default ErrorBoundry;

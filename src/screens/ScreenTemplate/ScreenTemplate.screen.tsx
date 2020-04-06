import React from "react";
import { ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import Styles, { Scroll } from "./ScreenTemplate.screen.styles";
import { ScreenTemplateProps as Props } from "./ScreenTemplate.screen.types";
import useDimensions from "utils/customHooks/useDimensions/useDimensions";
import ErrorBoundary from "@components/global/ErrorBoundry/ErrorBoundry";

const ScreenTemplate: React.FC<Props> = props => {
  const { scrollable = true, children } = props;
  const headerHeight = useHeaderHeight();
  const { width, height } = useDimensions("window", { height: headerHeight });

  let base = (
    <Styles width={width} height={height}>
      <ScrollView contentContainerStyle={Scroll}>{children}</ScrollView>
    </Styles>
  );

  if (!scrollable) {
    base = (
      <Styles width={width} height={height}>
        {children}
      </Styles>
    );
  }
  return <ErrorBoundary>{base}</ErrorBoundary>;
};

ScreenTemplate.defaultProps = {};

export default ScreenTemplate;

import React from "react";
import { ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import Styles, { Scroll } from "./ScreenTemplate.screen.styles";
import { ScreenTemplateProps as Props } from "./ScreenTemplate.screen.types";
import useDimensions from "utils/customHooks/useDimensions/useDimensions";

const ScreenTemplate: React.FC<Props> = props => {
  const { scrollable = true, children } = props;
  const headerHeight = useHeaderHeight();
  const { width, height } = useDimensions("window", { height: headerHeight });

  const base = (
    <Styles width={width} height={height}>
      <ScrollView contentContainerStyle={Scroll}>{children}</ScrollView>
    </Styles>
  );

  if (!scrollable) {
    return base;
  }
  return (
    <Styles width={width} height={height}>
      {base}
    </Styles>
  );
};

ScreenTemplate.defaultProps = {};

export default ScreenTemplate;

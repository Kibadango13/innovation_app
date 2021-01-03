// MainNavigator helper functions and data
import React, { ReactNode } from "react";
import { View } from "react-native";

//import { DefaultTheme } from "redux/theme/theme.types";
import { FocusIcon, FocusDecoration } from "./MainTabsNavigator.styles";
import { NotFocusDecoration } from "./MainTabsNavigator.styles";
import { IconProps } from "./MainTabsNavigator.types";

import ChairSVG from "assets/images/footer/chair.svg";
import ProfileSVG from "assets/images/footer/profile.svg";
import { DefaultTheme } from "styled-components";

export const renderIcon = (
  tabIndex: number,
  props: IconProps,
  theme: DefaultTheme
): ReactNode | undefined => {
  const icon = getIcon(tabIndex, props, theme);
  const { focused } = props;
  const decorationStyles = focused ? FocusDecoration : {};
  return (
    <View style={FocusIcon}>
      {icon}
      <NotFocusDecoration style={decorationStyles} />
    </View>
  );
};

const getIcon = (tabIndex: number, props: IconProps, theme: DefaultTheme) => {
  const focusedColor = theme.palette.primary;
  const notFocusedColor = theme.palette.grey[6];
  const { focused } = props;

  switch (tabIndex) {
    case 0:
      return <ChairSVG fill={focused ? focusedColor : notFocusedColor} />;
    case 1:
      return <ProfileSVG fill={focused ? focusedColor : notFocusedColor} />;
    default:
      return undefined;
  }
};

import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import css from "@styles/util/cssToReactNative";
import theme from "styles/theme/default";

export const TabsBar = css`
  padding-top: 8px;
  padding-bottom: 8px;
  height: ${theme.sizes.mainNavigator.height + "px"};
`;

export const FocusIcon = css`
  align-items: center;
`;

export const NotFocusDecoration = styled.View`
  background-color: ${props => props.theme.palette.primary};
  width: 48px;
  height: 4px;
  transform: translateY(28px);
  border-radius: 4px;
  opacity: 0;
`;

export const FocusDecoration = css`
  transform: translateY(28px);
  opacity: 1;
`;

export const NativeStyles = StyleSheet.create({
  tabStyle: {
    height: 64,
    paddingVertical: 8
  }
});

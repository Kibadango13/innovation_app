import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components/native";

import { AppState } from "redux/store.types";
import {
  ThemeProviderContainerProps as Props,
  ThemeProviderContainerMSTP,
  ThemeProviderContainerMDTP
} from "./ThemeProviderContainer.types";

const ThemeProviderContainer: React.FC<Props> = props => {
  const { selectedTheme } = props;

  return <ThemeProvider theme={selectedTheme}>{props.children}</ThemeProvider>;
};

ThemeProviderContainer.defaultProps = {};

const mapStateToProps = (state: AppState): ThemeProviderContainerMSTP => {
  return {
    selectedTheme: state.Theme.selectedTheme
  };
};

const mapDispatchToProps: ThemeProviderContainerMDTP = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeProviderContainer);

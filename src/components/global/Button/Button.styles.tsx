import styled from "styled-components/native";

import { ButtonStyledProps as Props } from "./Button.types";

const Styles = styled.View<Props>`
  border-radius: 4px;
  background-color: red;
  background-color: ${props =>
    props.buttonMode === "PRIMARY"
      ? props.theme.palette.primary
      : props.theme.palette.white};
  border: ${props =>
    props.buttonMode === "PRIMARY"
      ? "none"
      : `1px solid ${props.theme.palette.primary}`};

  padding: 8px 24px;
`;

export const Text = styled.Text<Props>`
  color: ${props =>
    props.buttonMode === "PRIMARY"
      ? props.theme.palette.white
      : props.theme.palette.primary};
  text-align: center;
`;

export default Styles;

import styled from "styled-components/native";

import { ScreenTemplateStyledProps as Props } from "./ScreenTemplate.screen.types";
import css from "styles/util/cssToReactNative";

const ScreenTemplateStyled = styled.View<Props>`
  flex: 1;
  min-width: ${props => `${props.width}px`};
  max-width: ${props => `${props.width}px`};
  min-height: ${props => `${props.height}px`};
`;

export const Scroll = css`
  flex-grow: 1;
`;

export default ScreenTemplateStyled;

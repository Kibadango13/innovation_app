import styled from "styled-components/native";

import { IntroStyledProps as Props } from "./Intro.types";

const Intro = styled.View<Props>`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.palette.primary};
`;

export default Intro;

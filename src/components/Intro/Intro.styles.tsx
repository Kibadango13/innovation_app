import styled from "styled-components/native";

import { IntroStyledProps as Props } from "./Intro.types";
import css from "../../styles/util/cssToReactNative";

import LogoSVG from "../../assets/images/logo.svg";

const Intro = styled.View<Props>`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.palette.grey[0]};
  padding-top: 16px;
  font-size: 16px;
`;

export const Version = styled.Text`
  color: ${props => props.theme.palette.grey[1]};
  padding: 8px 0;
`;

export const Logo = styled(LogoSVG)`
  width: 150px;
  height: 150px;
`;

export const CTA = css`
  border-radius: 20px;
`;

export default Intro;

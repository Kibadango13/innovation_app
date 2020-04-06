import styled from "styled-components/native";

import { ServerErrorStyledProps as Props } from "./ServerError.screen.types";
import ErrorSVG from "assets/images/serverError/server-error.svg";

const ServerErrorStyled = styled.View<Props>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.palette.white};
`;

export const ServerErrorSVG = styled(ErrorSVG)`
  max-width: 150%;
  transform: translateY(-30px);
`;

export default ServerErrorStyled;

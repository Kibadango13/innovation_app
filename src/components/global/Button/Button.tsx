import React from "react";
import { TouchableOpacity } from "react-native";

import Styles, { Text } from "./Button.styles";
import { ButtonProps as Props } from "./Button.types";

const Button: React.FC<Props> = props => {
  const { viewStyle, textStyle, onPress, mode = "PRIMARY", ...rest } = props;

  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <Styles buttonMode={mode} style={viewStyle}>
        <Text buttonMode={mode} style={textStyle}>
          {props.children}
        </Text>
      </Styles>
    </TouchableOpacity>
  );
};

Button.defaultProps = {};

export default Button;

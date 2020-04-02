// Interfaces and types from component Button
import {
  ButtonProps as RNButtonProps,
  ViewStyle,
  StyleProp,
  TextStyle
} from "react-native";

// Component Props
export interface ButtonProps extends Omit<RNButtonProps, "title"> {
  mode?: ButtonModes;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

// Styled Component Props
export interface ButtonStyledProps {
  buttonMode: ButtonModes;
}

export type ButtonModes = "PRIMARY" | "SECONDARY";

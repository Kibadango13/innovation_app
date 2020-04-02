import { StyleProp, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { FlattenSimpleInterpolation } from "styled-components";
import transform from "css-to-react-native";

// Transform css styles from styled components to React native styles object
const css = (
  styles: FlattenSimpleInterpolation
): StyleProp<ViewStyle | TextStyle | ImageStyle> => {
  const rows = styles
    .filter(block => !!block)
    .map(block => {
      return (block as string)
        .split(/(?:\r\n|\n|\r)/)
        .filter(line => !!line)
        .map(line => {
          return (line as string)
            .replace(";", "")
            .trim()
            .split(":");
        });
    });
  if (!rows.length) {
    return {};
  }
  return transform(rows[0]);
};

export default css;

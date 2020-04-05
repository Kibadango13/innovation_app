import { lighten } from "polished";
import { Dimensions } from "react-native";

const palette = {
  empty: "", // Fixes a bug with styled components that appends a coma
  primary: "#FB5058",
  "primary-light": lighten(0.3, "#FB5058"),
  secondary: "#F9F9F9",
  grey: [
    "#707070", // 0
    "#AAA" // 1
  ],
  black: "#000000",
  white: "#FFFFFF"
};

const fonts = {
  primary: "'Montserrat', sans-serif"
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const sizes = {
  page: {
    minWidth: `${windowWidth}px`,
    maxWidth: `${windowWidth}px`,
    minHeight: `${windowHeight}px`
  }
};

export default { palette, fonts, sizes };

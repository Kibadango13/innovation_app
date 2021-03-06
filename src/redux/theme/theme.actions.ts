import { ThunkDispatch } from "redux/store.types";
import themes from "styles/theme";
import CONSTANTS from "config/constants";
import { THEMES } from "interfaces/theme.types";

export const SET_SELECTED_THEME = "SET_SELECTED_THEME";

export const setSelectedTheme = (theme: THEMES) => (
  dispatch: ThunkDispatch
) => {
  const themeNames = CONSTANTS.THEMES;
  let selectedTheme: any = {};
  switch (theme) {
    case themeNames.DARK:
      selectedTheme = themes.dark;
      break;
    default:
      selectedTheme = themes.defaultTheme;
      break;
  }
  dispatch({ type: SET_SELECTED_THEME, payload: selectedTheme });
};

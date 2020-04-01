// Interfaces and types from Container ThemeProvider
import themes from "styles/theme";

// Container Props
export interface OwnProps {}

// Redux connect state props
export interface ThemeProviderContainerMSTP {
  selectedTheme: typeof themes.defaultTheme;
}

// Redux connect dispatch props
export interface ThemeProviderContainerMDTP {}

export type ThemeProviderContainerProps = OwnProps &
  ThemeProviderContainerMSTP &
  ThemeProviderContainerMDTP;

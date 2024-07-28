import borders from "./generated/borders";
import breakpoints from "./generated/breakpoints";
import colors from "./generated/colors";
import modals from "./generated/modals";
import primitives from "./generated/primitives";
import sizes from "./generated/sizes";
import settings from "./settings";
import "./theme";

export type ThemeToken = string;
export type CssPropertyValue = string;
export type Theme = Record<ThemeToken, CssPropertyValue>;
export type Themes = {
  common?: Theme;
  light?: Theme;
  dark?: Theme;
};

export const defaultThemes: Themes = {
  common: {
    ...primitives,
    ...sizes,
    ...breakpoints,
    ...modals,
    ...borders
  },
  light: {
    ...colors.light
  },
  dark: {
    ...colors.dark
  }
};

export const theme = (mode: "light" | "dark" = "light"): Theme => {
  return { ...defaultThemes.common, ...defaultThemes[mode] };
};

export default {
  theme,
  defaultThemes,
  settings
};

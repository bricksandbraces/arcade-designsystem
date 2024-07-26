// import border from "@openbricksandbraces/designtokens/dist/json/border.json";
// import breakpoints from "@openbricksandbraces/designtokens/dist/json/breakpoints.json";
// import modals from "@openbricksandbraces/designtokens/dist/json/modals.json";
// import primitives from "../dist/primitives";
// import sizes from "../dist/sizes";
// import colors from "../dist/colors";

import borders from "./generated/borders";
import breakpoints from "./generated/breakpoints";
import colors from "./generated/colors";
import modals from "./generated/modals";
import primitives from "./generated/primitives";
import sizes from "./generated/sizes";

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

import animations from "@openbricksandbraces/designtokens/dist/json/animations.json";
import colors from "@openbricksandbraces/designtokens/dist/json/colors.json";
import shadows from "@openbricksandbraces/designtokens/dist/json/shadows.json";
import metrics from "@openbricksandbraces/designtokens/dist/json/sizes.json";
import typography from "@openbricksandbraces/designtokens/dist/json/typography.json";
import Color from "color";

export type ThemeToken = string;
export type CssPropertyValue = string;

export type Theme = {
  light?: Record<ThemeToken, CssPropertyValue>;
  dark?: Record<ThemeToken, CssPropertyValue>;
};

const rgba = (color: string, alpha: number): CssPropertyValue => {
  const colorObj = Color(color).object() as { r: number; g: number; b: number };
  return `rgb(${colorObj.r}, ${colorObj.g}, ${colorObj.b}, ${alpha})`;
};

export const defaultTheme = {
  light: {
    /* " Root Colors " */
    "color-app-01": colors.white,
    "color-app-02": colors["gray-85"],
    "color-app-03": colors["gray-75"],
    "color-app-04": colors["gray-55"],
    "color-app-05": colors.black,
    "color-app-05-alpha-5": rgba(colors.black, 0.05),
    "color-app-05-alpha-10": rgba(colors.black, 0.1),
    "color-app-01-alpha-80": rgba(colors.white, 0.8),
    "color-app-background": colors.white,

    /* " Background Colors " */
    "color-background": colors["gray-95"],
    "color-background-alpha-0": rgba(colors["gray-95"], 0),
    "color-hover": colors["gray-90"],
    "color-active": colors["gray-85"],
    "color-background-light": colors["gray-90"],
    "color-hover-light": colors["gray-85"],
    "color-active-light": colors["gray-75"],
    "color-focus": colors["brand-50"],
    "color-focus-highlight": rgba(colors["brand-50"], 0.1),
    "color-focus-danger": colors["red-50"],
    "color-focus-danger-highlight": rgba(colors["red-50"], 0.1),
    "color-focus-inverse": colors.white,
    "color-divider-dark": rgba(colors.white, 0.2),
    "color-divider-light": rgba(colors.black, 0.2),
    "color-selected": colors["gray-90"],
    "color-selected-light": colors["gray-85"],
    "color-unselected": colors["gray-95"],
    "color-readonly": colors["gray-95"],
    "color-disabled": colors["gray-90"],
    "color-skeleton-01": colors["gray-95"],
    "color-skeleton-02": colors["gray-90"],
    "color-skeleton-03": colors["gray-75"],
    "color-skeleton-04": rgba(colors["gray-75"], 0.25),
    "color-brand-01": colors["brand-95"],
    "color-brand-02": colors["brand-80"],
    "color-brand-03": colors["brand-70"],
    "color-brand-04": colors["brand-50"],
    "color-brand-05": colors["brand-5"],
    "color-onbrand-01": colors.white,
    "color-onbrand-02": colors["brand-85"],
    "color-onbrand-03": colors["brand-75"],
    "color-onbrand-04": colors["brand-65"],
    "color-onbrand-05": colors["brand-50"],

    /* " Table Colors " */
    "color-table-background": colors["gray-95"],
    "color-table-hover": colors["gray-85"],
    "color-table-active": colors["gray-75"],

    /* " Border Colors " */
    "color-border": colors["gray-90"],
    "color-border-light": colors["gray-85"],

    /* " Divider Colors " */
    "color-divider-subtle": colors["gray-95"],
    "color-divider-default": colors["gray-90"],
    "color-divider-harsh": colors["gray-75"],

    /* " Font Colors " */
    "color-font-selected": colors.black,
    "color-font-unselected": colors["gray-35"],
    "color-font-text-01": colors["gray-10"],
    "color-font-text-02": colors["gray-20"],
    "color-font-text-03": colors["gray-30"],
    "color-font-text-04": colors["gray-40"],
    "color-font-text-05": colors["gray-55"],
    "color-font-text-inverse-01": colors.white,
    "color-font-text-inverse-02": colors["gray-90"],
    "color-font-text-inverse-03": colors["gray-75"],
    "color-font-text-inverse-04": colors["gray-65"],
    "color-font-text-inverse-05": colors["gray-55"],
    "color-font-decoration": colors["brand-25"],
    "color-font-link": colors["blue-40"],
    "color-font-link-hover": colors["blue-30"],
    "color-font-placeholder": colors["gray-65"],
    "color-font-readonly": colors["gray-40"],
    "color-font-disabled": colors["gray-75"],
    "color-font-warning": colors["yellow-40"],
    "color-font-success": colors["green-40"],
    "color-font-info": colors["blue-40"],
    "color-font-danger": colors["red-40"],

    /* " Button & Interactive Colors " */
    "color-primary-enabled": colors["brand-50"],
    "color-primary-hover": colors["brand-45"],
    "color-primary-active": colors["brand-40"],
    "color-secondary-enabled": colors["gray-85"],
    "color-secondary-hover": colors["gray-75"],
    "color-secondary-active": colors["gray-75"],
    "color-tertiary-enabled": colors["brand-50"],
    "color-tertiary-hover": colors["brand-45"],
    "color-tertiary-active": colors["brand-40"],
    "color-ghost-enabled": "transparent",
    "color-ghost-hover": rgba(colors.black, 0.1),
    "color-ghost-active": rgba(colors.black, 0.2),
    "color-warning": colors["yellow-50"],
    "color-info": colors["blue-50"],
    "color-success": colors["green-50"],
    "color-danger": colors["red-50"],
    "color-danger-hover": colors["red-55"],
    "color-danger-active": colors["red-60"],

    /* " Gradients " */
    "color-gradient-01":
      "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 20%, rgba(255, 255, 255, 0) 100%)",
    "color-gradient-02":
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(238,230,255,1) 100%)",

    /* " Badge Colors " */
    "color-badge-gray-bg": colors["gray-90"],
    "color-badge-gray-hover": colors["gray-85"],
    "color-badge-gray-active": colors["gray-75"],
    "color-badge-gray-font": colors["gray-15"],
    "color-badge-gray-border": colors["gray-85"],
    "color-badge-red-bg": colors["red-85"],
    "color-badge-red-hover": colors["red-80"],
    "color-badge-red-active": colors["red-75"],
    "color-badge-red-font": colors["red-10"],
    "color-badge-red-border": colors["red-80"],
    "color-badge-green-bg": colors["green-85"],
    "color-badge-green-hover": colors["green-80"],
    "color-badge-green-active": colors["green-75"],
    "color-badge-green-font": colors["green-10"],
    "color-badge-green-border": colors["green-80"],
    "color-badge-yellow-bg": colors["yellow-85"],
    "color-badge-yellow-hover": colors["yellow-80"],
    "color-badge-yellow-active": colors["yellow-75"],
    "color-badge-yellow-font": colors["yellow-10"],
    "color-badge-yellow-border": colors["yellow-80"],
    "color-badge-blue-bg": colors["blue-85"],
    "color-badge-blue-hover": colors["blue-80"],
    "color-badge-blue-active": colors["blue-75"],
    "color-badge-blue-font": colors["blue-10"],
    "color-badge-blue-border": colors["blue-80"],
    "color-badge-cyan-bg": colors["cyan-85"],
    "color-badge-cyan-hover": colors["cyan-80"],
    "color-badge-cyan-active": colors["cyan-75"],
    "color-badge-cyan-font": colors["cyan-10"],
    "color-badge-cyan-border": colors["cyan-80"],
    "color-badge-orange-bg": colors["orange-85"],
    "color-badge-orange-hover": colors["orange-80"],
    "color-badge-orange-active": colors["orange-75"],
    "color-badge-orange-font": colors["orange-10"],
    "color-badge-orange-border": colors["orange-80"],
    "color-badge-purple-bg": colors["brand-85"],
    "color-badge-purple-hover": colors["brand-80"],
    "color-badge-purple-active": colors["brand-75"],
    "color-badge-purple-font": colors["brand-10"],
    "color-badge-purple-border": colors["brand-80"],

    /* " Overlay " */
    "color-overlay": colors.overlay,

    /* = = = Typography = = = */

    /* " Type Scale " */
    "font-family": typography["font-family"],
    "font-family-code": typography["font-family-code"],

    /* Learn more under https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/ */

    "font-caption-size": typography["font-caption-size"],
    "font-label-size": typography["font-label-size"],
    "font-body-01-size": typography["font-body-01-size"],
    "font-body-02-size": typography["font-body-02-size"],
    "font-headline-01-size": typography["font-headline-01-size"],
    "font-headline-02-size": typography["font-headline-02-size"],
    "font-headline-03-size": typography["font-headline-03-size"],
    "font-headline-04-size": typography["font-headline-04-size"],
    "font-headline-05-size": typography["font-headline-05-size"],
    "font-headline-06-size": typography["font-headline-06-size"],
    "font-marketing-01-size": typography["font-marketing-01-size"],
    "font-marketing-02-size": typography["font-marketing-02-size"],
    "font-quote-01-size": typography["font-quote-01-size"],
    "font-quote-02-size": typography["font-quote-02-size"],
    "font-code-size": typography["font-code-size"],

    /* " Font weights " */
    "font-caption-weight": typography["font-caption-weight"],
    "font-label-weight": typography["font-label-weight"],
    "font-body-01-weight": typography["font-body-01-weight"],
    "font-body-02-weight": typography["font-body-02-weight"],
    "font-headline-01-weight": typography["font-headline-01-weight"],
    "font-headline-02-weight": typography["font-headline-02-weight"],
    "font-headline-03-weight": typography["font-headline-03-weight"],
    "font-headline-04-weight": typography["font-headline-04-weight"],
    "font-headline-05-weight": typography["font-headline-05-weight"],
    "font-headline-06-weight": typography["font-headline-06-weight"],
    "font-marketing-01-weight": typography["font-marketing-01-weight"],
    "font-marketing-02-weight": typography["font-marketing-02-weight"],
    "font-quote-01-weight": typography["font-quote-01-weight"],
    "font-quote-02-weight": typography["font-quote-02-weight"],
    "font-code-weight": typography["font-code-weight"],

    /* " Font styles " */
    "font-caption-style": typography["font-caption-style"],
    "font-label-style": typography["font-label-style"],
    "font-body-01-style": typography["font-body-01-style"],
    "font-body-02-style": typography["font-body-02-style"],
    "font-headline-01-style": typography["font-headline-01-style"],
    "font-headline-02-style": typography["font-headline-02-style"],
    "font-headline-03-style": typography["font-headline-03-style"],
    "font-headline-04-style": typography["font-headline-04-style"],
    "font-headline-05-style": typography["font-headline-05-style"],
    "font-headline-06-style": typography["font-headline-06-style"],
    "font-marketing-01-style": typography["font-marketing-01-style"],
    "font-marketing-02-style": typography["font-marketing-02-style"],
    "font-quote-01-style": typography["font-quote-01-style"],
    "font-quote-02-style": typography["font-quote-02-style"],
    "font-code-style": typography["font-code-style"],

    /* " Line heights " */
    "font-caption-leading": typography["font-caption-leading"],
    "font-label-leading": typography["font-label-leading"],
    "font-body-01-leading": typography["font-body-01-leading"],
    "font-body-02-leading": typography["font-body-02-leading"],
    "font-headline-01-leading": typography["font-headline-01-leading"],
    "font-headline-02-leading": typography["font-headline-02-leading"],
    "font-headline-03-leading": typography["font-headline-03-leading"],
    "font-headline-04-leading": typography["font-headline-04-leading"],
    "font-headline-05-leading": typography["font-headline-05-leading"],
    "font-headline-06-leading": typography["font-headline-06-leading"],
    "font-marketing-01-leading": typography["font-marketing-01-leading"],
    "font-marketing-02-leading": typography["font-marketing-02-leading"],
    "font-quote-01-leading": typography["font-quote-01-leading"],
    "font-quote-02-leading": typography["font-quote-02-leading"],
    "font-code-leading": typography["font-code-leading"],

    /* = = = Sizes = = = */

    /* " Container Sizes " */
    "size-container-01": metrics["container-4xs"],
    "size-container-02": metrics["container-3xs"],
    "size-container-03": metrics["container-2xs"],
    "size-container-04": metrics["container-xs"],
    "size-container-05": metrics["container-sm"],
    "size-container-06": metrics["container-md"],
    "size-container-07": metrics["container-lg"],
    "size-container-08": metrics["container-xlg"],

    /* " Field Sizes " */
    "size-field-xsmall": metrics["container-xs"],
    "size-field-small": metrics["container-sm"],
    "size-field-default": metrics["container-md"],
    "size-field-large": metrics["container-lg"],

    /* " Border Sizes " */
    "size-border": "0.0625rem",
    "size-border-badge": "0.0625rem",
    "size-border-state": "0.0625rem",

    /* " Focus Sizes " */
    "size-focus": "0.0625rem",

    /* " Border Style " */
    "style-border": "solid",

    /* " Divider Sizes " */
    "size-divider": "0.0625rem",

    /* " Divider Style " */
    "style-divider": "solid",

    /* " Spacing Sizes " */
    "size-spacing-01": "0.125rem",
    "size-spacing-02": "0.25rem",
    "size-spacing-03": "0.5rem",
    "size-spacing-04": "0.75rem",
    "size-spacing-05": metrics["spacing-2xs"],
    "size-spacing-06": metrics["spacing-xs"],
    "size-spacing-07": metrics["spacing-sm"],
    "size-spacing-08": metrics["spacing-md"],
    "size-spacing-09": metrics["spacing-lg"],
    "size-spacing-10": metrics["spacing-xlg"],
    "size-spacing-11": metrics["spacing-2xlg"],
    "size-spacing-12": metrics["spacing-3xlg"],
    "size-spacing-13": metrics["spacing-4xlg"],
    "size-spacing-inner": "0.25rem",

    /* = = = Component = = = */

    /* " Border Radius " */
    "component-radius-01": metrics["radius-xs"],
    "component-radius-02": metrics["radius-md"],
    "component-radius-03": metrics["radius-lg"],

    /* " Box Shadow " */
    "component-shadow-01": shadows["shadow-01"],
    "component-shadow-02": shadows["shadow-02"],
    "component-shadow-03": shadows["shadow-03"],

    /* = = = Transitions = = = */

    /* " Static Transitions " */
    "transition-app-01": animations["transition-app-01"],
    "transition-app-02": animations["transition-app-02"],
    "transition-app-03": animations["transition-app-03"],
    "transition-app-04": animations["transition-app-04"],
    "transition-app-05": animations["transition-app-05"]
  },
  dark: {
    /* " Root Colors " */
    "color-app-01": colors["gray-5"],
    "color-app-02": colors["gray-20"],
    "color-app-03": colors["gray-30"],
    "color-app-04": colors["gray-50"],
    "color-app-05": colors.white,
    "color-app-05-alpha-5": rgba(colors.white, 0.05),
    "color-app-05-alpha-10": rgba(colors.white, 0.1),
    "color-app-01-alpha-80": rgba(colors["gray-50"], 0.8),
    "color-app-background": colors["gray-50"],

    /* " Background Colors " */
    "color-background": colors["gray-10"],
    "color-background-alpha-0": rgba(colors["gray-10"], 0),
    "color-hover": colors["gray-15"],
    "color-active": colors["gray-20"],
    "color-background-light": colors["gray-15"],
    "color-hover-light": colors["gray-20"],
    "color-active-light": colors["gray-25"],
    "color-focus": colors.white,
    "color-focus-highlight": rgba(colors.white, 0.25),
    "color-focus-danger": colors["red-50"],
    "color-focus-danger-highlight": rgba(colors["red-50"], 0.25),
    "color-focus-inverse": colors.black,
    "color-divider-dark": rgba(colors.black, 0.2),
    "color-divider-light": rgba(colors.white, 0.2),
    "color-selected": colors["gray-15"],
    "color-selected-light": colors["gray-20"],
    "color-unselected": colors["gray-10"],
    "color-readonly": colors["gray-10"],
    "color-disabled": colors["gray-15"],
    "color-skeleton-01": colors["gray-10"],
    "color-skeleton-02": colors["gray-15"],
    "color-skeleton-03": colors["gray-25"],
    "color-skeleton-04": rgba(colors["gray-25"], 0.25),
    "color-brand-01": colors["brand-95"],
    "color-brand-02": colors["brand-80"],
    "color-brand-03": colors["brand-70"],
    "color-brand-04": colors["brand-50"],
    "color-brand-05": colors["brand-5"],
    "color-onbrand-01": colors.white,
    "color-onbrand-02": colors["brand-85"],
    "color-onbrand-03": colors["brand-75"],
    "color-onbrand-04": colors["brand-65"],
    "color-onbrand-05": colors["brand-50"],

    /* " Table Colors " */
    "color-table-background": colors["gray-10"],
    "color-table-hover": colors["gray-20"],
    "color-table-active": colors["gray-25"],

    /* " Border Colors " */
    "color-border": colors["gray-15"],
    "color-border-light": colors["gray-20"],

    /* " Divider Colors " */
    "color-divider-subtle": colors["gray-10"],
    "color-divider-default": colors["gray-15"],
    "color-divider-harsh": colors["gray-30"],

    /* " Font Colors " */
    "color-font-selected": colors.white,
    "color-font-unselected": colors["gray-70"],
    "color-font-text-01": colors["gray-95"],
    "color-font-text-02": colors["gray-85"],
    "color-font-text-03": colors["gray-75"],
    "color-font-text-04": colors["gray-65"],
    "color-font-text-05": colors["gray-50"],
    "color-font-text-inverse-01": colors["gray-5"],
    "color-font-text-inverse-02": colors["gray-15"],
    "color-font-text-inverse-03": colors["gray-25"],
    "color-font-text-inverse-04": colors["gray-35"],
    "color-font-text-inverse-05": colors["gray-50"],
    "color-font-decoration": colors["brand-75"],
    "color-font-link": colors["blue-60"],
    "color-font-link-hover": colors["blue-70"],
    "color-font-placeholder": colors["gray-40"],
    "color-font-readonly": colors["gray-65"],
    "color-font-disabled": colors["gray-25"],
    "color-font-warning": colors["yellow-60"],
    "color-font-success": colors["green-60"],
    "color-font-info": colors["blue-60"],
    "color-font-danger": colors["red-60"],

    /* " Button & Interactive Colors " */
    "color-primary-enabled": colors["brand-50"],
    "color-primary-hover": colors["brand-45"],
    "color-primary-active": colors["brand-40"],
    "color-secondary-enabled": colors["gray-30"],
    "color-secondary-hover": colors["gray-25"],
    "color-secondary-active": colors["gray-20"],
    "color-tertiary-enabled": colors.white,
    "color-tertiary-hover": colors["gray-95"],
    "color-tertiary-active": colors["gray-90"],
    "color-ghost-enabled": "transparent",
    "color-ghost-hover": rgba(colors.white, 0.1),
    "color-ghost-active": rgba(colors.white, 0.2),
    "color-warning": colors["yellow-50"],
    "color-info": colors["blue-50"],
    "color-success": colors["green-50"],
    "color-danger": colors["red-50"],
    "color-danger-hover": colors["red-45"],
    "color-danger-active": colors["red-40"],

    /* " Gradients " */
    "color-gradient-01":
      "linear-gradient(90deg, rgba(0, 0, 0, 0.85) 20%, rgba(0, 0, 0, 0) 100%)",
    "color-gradient-02":
      "linear-gradient(0deg, rgba(12,12,13,1) 0%, rgba(25,0,76,1) 100%, rgba(73,0,229,1) 100%)",

    /* " Badge Colors " */
    "color-badge-gray-bg": colors["gray-15"],
    "color-badge-gray-hover": colors["gray-20"],
    "color-badge-gray-active": colors["gray-25"],
    "color-badge-gray-font": colors["gray-90"],
    "color-badge-gray-border": colors["gray-20"],
    "color-badge-red-bg": colors["red-15"],
    "color-badge-red-hover": colors["red-20"],
    "color-badge-red-active": colors["red-20"],
    "color-badge-red-font": colors["red-90"],
    "color-badge-red-border": colors["red-20"],
    "color-badge-green-bg": colors["green-15"],
    "color-badge-green-hover": colors["green-20"],
    "color-badge-green-active": colors["green-25"],
    "color-badge-green-font": colors["green-90"],
    "color-badge-green-border": colors["green-20"],
    "color-badge-yellow-bg": colors["yellow-15"],
    "color-badge-yellow-hover": colors["yellow-20"],
    "color-badge-yellow-active": colors["yellow-25"],
    "color-badge-yellow-font": colors["yellow-90"],
    "color-badge-yellow-border": colors["yellow-20"],
    "color-badge-blue-bg": colors["blue-15"],
    "color-badge-blue-hover": colors["blue-20"],
    "color-badge-blue-active": colors["blue-25"],
    "color-badge-blue-font": colors["blue-90"],
    "color-badge-blue-border": colors["blue-20"],
    "color-badge-cyan-bg": colors["cyan-15"],
    "color-badge-cyan-hover": colors["cyan-20"],
    "color-badge-cyan-active": colors["cyan-25"],
    "color-badge-cyan-font": colors["cyan-90"],
    "color-badge-cyan-border": colors["cyan-20"],
    "color-badge-orange-bg": colors["orange-15"],
    "color-badge-orange-hover": colors["orange-20"],
    "color-badge-orange-active": colors["orange-25"],
    "color-badge-orange-font": colors["orange-90"],
    "color-badge-orange-border": colors["orange-20"],
    "color-badge-purple-bg": colors["brand-15"],
    "color-badge-purple-hover": colors["brand-20"],
    "color-badge-purple-active": colors["brand-25"],
    "color-badge-purple-font": colors["brand-90"],
    "color-badge-purple-border": colors["brand-20"],

    /* " Overlay " */
    "color-overlay": colors.overlay,

    /* = = = Typography = = = */

    /* " Type Scale " */
    "font-family": typography["font-family"],
    "font-family-code": typography["font-family-code"],

    /* Learn more under https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/ */

    "font-caption-size": typography["font-caption-size"],
    "font-label-size": typography["font-label-size"],
    "font-body-01-size": typography["font-body-01-size"],
    "font-body-02-size": typography["font-body-02-size"],
    "font-headline-01-size": typography["font-headline-01-size"],
    "font-headline-02-size": typography["font-headline-02-size"],
    "font-headline-03-size": typography["font-headline-03-size"],
    "font-headline-04-size": typography["font-headline-04-size"],
    "font-headline-05-size": typography["font-headline-05-size"],
    "font-headline-06-size": typography["font-headline-06-size"],
    "font-marketing-01-size": typography["font-marketing-01-size"],
    "font-marketing-02-size": typography["font-marketing-02-size"],
    "font-quote-01-size": typography["font-quote-01-size"],
    "font-quote-02-size": typography["font-quote-02-size"],
    "font-code-size": typography["font-code-size"],

    /* " Font weights " */
    "font-caption-weight": typography["font-caption-weight"],
    "font-label-weight": typography["font-label-weight"],
    "font-body-01-weight": typography["font-body-01-weight"],
    "font-body-02-weight": typography["font-body-02-weight"],
    "font-headline-01-weight": typography["font-headline-01-weight"],
    "font-headline-02-weight": typography["font-headline-02-weight"],
    "font-headline-03-weight": typography["font-headline-03-weight"],
    "font-headline-04-weight": typography["font-headline-04-weight"],
    "font-headline-05-weight": typography["font-headline-05-weight"],
    "font-headline-06-weight": typography["font-headline-06-weight"],
    "font-marketing-01-weight": typography["font-marketing-01-weight"],
    "font-marketing-02-weight": typography["font-marketing-02-weight"],
    "font-quote-01-weight": typography["font-quote-01-weight"],
    "font-quote-02-weight": typography["font-quote-02-weight"],
    "font-code-weight": typography["font-code-weight"],

    /* " Font styles " */
    "font-caption-style": typography["font-caption-style"],
    "font-label-style": typography["font-label-style"],
    "font-body-01-style": typography["font-body-01-style"],
    "font-body-02-style": typography["font-body-02-style"],
    "font-headline-01-style": typography["font-headline-01-style"],
    "font-headline-02-style": typography["font-headline-02-style"],
    "font-headline-03-style": typography["font-headline-03-style"],
    "font-headline-04-style": typography["font-headline-04-style"],
    "font-headline-05-style": typography["font-headline-05-style"],
    "font-headline-06-style": typography["font-headline-06-style"],
    "font-marketing-01-style": typography["font-marketing-01-style"],
    "font-marketing-02-style": typography["font-marketing-02-style"],
    "font-quote-01-style": typography["font-quote-01-style"],
    "font-quote-02-style": typography["font-quote-02-style"],
    "font-code-style": typography["font-code-style"],

    /* " Line heights " */
    "font-caption-leading": typography["font-caption-leading"],
    "font-label-leading": typography["font-label-leading"],
    "font-body-01-leading": typography["font-body-01-leading"],
    "font-body-02-leading": typography["font-body-02-leading"],
    "font-headline-01-leading": typography["font-headline-01-leading"],
    "font-headline-02-leading": typography["font-headline-02-leading"],
    "font-headline-03-leading": typography["font-headline-03-leading"],
    "font-headline-04-leading": typography["font-headline-04-leading"],
    "font-headline-05-leading": typography["font-headline-05-leading"],
    "font-headline-06-leading": typography["font-headline-06-leading"],
    "font-marketing-01-leading": typography["font-marketing-01-leading"],
    "font-marketing-02-leading": typography["font-marketing-02-leading"],
    "font-quote-01-leading": typography["font-quote-01-leading"],
    "font-quote-02-leading": typography["font-quote-02-leading"],
    "font-code-leading": typography["font-code-leading"],

    /* = = = Sizes = = = */

    /* " Container Sizes " */
    "size-container-01": metrics["container-4xs"],
    "size-container-02": metrics["container-3xs"],
    "size-container-03": metrics["container-2xs"],
    "size-container-04": metrics["container-xs"],
    "size-container-05": metrics["container-sm"],
    "size-container-06": metrics["container-md"],
    "size-container-07": metrics["container-lg"],
    "size-container-08": metrics["container-xlg"],

    /* " Field Sizes " */
    "size-field-xsmall": metrics["spacing-2xs"],
    "size-field-small": metrics["spacing-xs"],
    "size-field-default": metrics["spacing-sm"],
    "size-field-large": metrics["spacing-md"],

    /* " Border Sizes " */
    "size-border": "0.0625rem",
    "size-border-badge": "0.0625rem",
    "size-border-state": "0.0625rem",

    /* " Focus Sizes " */
    "size-focus": "0.0625rem",

    /* " Border Style " */
    "style-border": "solid",
    "style-border-focus": "solid",

    /* " Divider Sizes " */
    "size-divider": "0.0625rem",

    /* " Border Style " */
    "style-divider": "solid",

    /* " Spacing Sizes " */
    "size-spacing-01": "0.125rem",
    "size-spacing-02": "0.25rem",
    "size-spacing-03": "0.5rem",
    "size-spacing-04": "0.75rem",
    "size-spacing-05": "1rem",
    "size-spacing-06": "1.5rem",
    "size-spacing-07": metrics["spacing-2xs"],
    "size-spacing-08": metrics["spacing-xs"],
    "size-spacing-09": metrics["spacing-sm"],
    "size-spacing-10": metrics["spacing-md"],
    "size-spacing-11": metrics["spacing-lg"],
    "size-spacing-12": metrics["spacing-xlg"],
    "size-spacing-13": metrics["spacing-2xlg"],
    "size-spacing-inner": metrics["spacing-2xs"],

    /* = = = Component = = = */

    /* " Border Radius " */
    "component-radius-01": metrics["radius-xs"],
    "component-radius-02": metrics["radius-sm"],
    "component-radius-03": metrics["radius-md"],

    /* " Box Shadow " */
    "component-shadow-01": shadows["shadow-01"],
    "component-shadow-02": shadows["shadow-02"],
    "component-shadow-03": shadows["shadow-03"],

    /* = = = Transitions = = = */

    /* " Static Transitions " */
    "transition-app-01": animations["transition-app-01"],
    "transition-app-02": animations["transition-app-02"],
    "transition-app-03": animations["transition-app-03"],
    "transition-app-04": animations["transition-app-04"],
    "transition-app-05": animations["transition-app-05"]
  }
};

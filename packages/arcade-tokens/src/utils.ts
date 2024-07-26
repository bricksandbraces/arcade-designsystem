// eslint-disable-next-line import/no-extraneous-dependencies
import Color from "color";
import { CssPropertyValue } from ".";

export const rgba = (color: string, alpha: number): CssPropertyValue => {
  const colorObj = Color(color).object() as { r: number; g: number; b: number };
  return `rgb(${colorObj.r}, ${colorObj.g}, ${colorObj.b}, ${alpha})`;
};

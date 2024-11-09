import fs from "fs";
import Color from "color";
import {
  BorderValues,
  BreakpointValues,
  ColorValues,
  FigmaTheme,
  ModalValues,
  PrimitivesValues,
  SizesValues
} from "../../src/theme";

const INPUT_PATH = __dirname + "/../../variables2css.json";
const OUTPUT_PATH = __dirname + "/../../src/generated/";
const DISCLAIMER =
  "/** DO NOT MODIFY! This file has been auto-generated from task:generate-tokens.\nFor changing, consolidate /packages/arcade-tokens/variables2css.json and rerun the task. */\n\n";
const IMPORT_PRIMITIVES = 'import primitives from "./primitives";\n\n';

const input = fs.readFileSync(INPUT_PATH, "utf8");

const figmaTheme: FigmaTheme = JSON.parse(input);

function figmaVarToJSVar(varName: string) {
  return varName.split("/").slice(1).join("-").replaceAll("%", "\\\\%");
}

function generatePrimitives(values: PrimitivesValues) {
  let primitiveOutput = `${DISCLAIMER}export default {\n`;
  values[0].color.forEach((color) => {
    if (color.value.includes("/")) {
      // convert rgb(255 255 255 / 0.95) into rgba(255, 255, 255, 0.95)
      console.log(color.value);
      const split = color.value.split("/");
      const rgb = split[0].split(" ").join(", ").replace("rgb", "rgba");
      const alpha = split[1].trim().substring(0, split[1].length - 1);
      primitiveOutput += `  "${figmaVarToJSVar(color.name)}": "${rgb}${alpha}",\n`;
    } else {
      primitiveOutput += `  "${figmaVarToJSVar(color.name)}": "${Color(color.value)}",\n`;
    }
  });
  primitiveOutput += "};\n";

  fs.writeFileSync(OUTPUT_PATH + "primitives.ts", primitiveOutput);
}

function generateColors(values: ColorValues[]) {
  let colorOutput = `${DISCLAIMER}${IMPORT_PRIMITIVES}export default {\n`;
  values.forEach((colorTheme) => {
    colorOutput += `  ${colorTheme.mode.name.toLowerCase()}: {\n`;
    colorTheme.color.forEach((color) => {
      colorOutput += `    "${color.name.replace(/\//g, "-")}": primitives["${figmaVarToJSVar(color.var)}"],\n`;
    });
    colorOutput += "  },\n";
  });
  colorOutput += "};\n";

  fs.writeFileSync(OUTPUT_PATH + "colors.ts", colorOutput);
}

function generateSizes(values: SizesValues[]) {
  let sizeOutput = `${DISCLAIMER}export default {\n`;

  values[0].number.forEach((number) => {
    sizeOutput += `    "${number.name.replaceAll("/", "-")}": "${number.value}",\n`;
  });

  sizeOutput += "};\n";

  fs.writeFileSync(OUTPUT_PATH + "sizes.ts", sizeOutput);
}

function generateBreakpoints(values: BreakpointValues[]) {
  let breakpointOutput = `${DISCLAIMER}export default {\n`;
  values.forEach((breakpoint) => {
    const breakpointSplit = breakpoint.mode.name.split(" ");
    const breakpointName = breakpointSplit[0].toLowerCase();
    const breakpointMinWidth = breakpointSplit[1]
      .replaceAll("px", "")
      .replaceAll("(", "")
      .replaceAll(")", "");
    breakpointOutput += `  ${breakpointName}: "${breakpointMinWidth}",\n`;
  });
  breakpointOutput += "};\n";

  fs.writeFileSync(OUTPUT_PATH + "breakpoints.ts", breakpointOutput);
}

function generateBorders(values: BorderValues[]) {
  let borderOutput = `${DISCLAIMER}export default {\n`;
  values[0].number.forEach((border) => {
    borderOutput += `  "${border.name}": "${border.value}",\n`;
  });
  borderOutput += "};\n";

  fs.writeFileSync(OUTPUT_PATH + "borders.ts", borderOutput);
}

function generateModals(values: ModalValues[]) {
  let modalOutput = `${DISCLAIMER}export default {\n`;

  values.forEach((modal) => {
    const modalName = modal.mode.name.toLowerCase();
    modal.number.forEach((number) => {
      const varName = number.name
        .split("_")
        .map((s) => s.toLowerCase())
        .join("-");
      modalOutput += `  "${modalName}-${varName}": "${number.value}",\n`;
    });
  });

  modalOutput += "};\n";

  fs.writeFileSync(OUTPUT_PATH + "modals.ts", modalOutput);
}

figmaTheme.forEach((valueSet) => {
  if (valueSet.name === "Colors") {
    // 🎨 COLORS
    const values = valueSet.values as any as ColorValues[];

    generateColors(values);
  } else if (valueSet.name === "Sizes") {
    // 📐 SIZES
    const values = valueSet.values as any as SizesValues[];

    generateSizes(values);
  } else if (valueSet.name === "Breakpoint") {
    // 🖥 BREAKPOINTS
    const values = valueSet.values as any as BreakpointValues[];

    generateBreakpoints(values);
  } else if (valueSet.name === "Primitives") {
    // 🎨 PRIMITIVES
    const values = valueSet.values as any as PrimitivesValues;

    generatePrimitives(values);
  } else if (valueSet.name === "Modal") {
    // 🖥 MODALS
    const values = valueSet.values as any as ModalValues[];

    generateModals(values);
  } else if (valueSet.name === "Border") {
    // 📏 BORDERS
    const values = valueSet.values as any as BorderValues[];

    generateBorders(values);
  }
});

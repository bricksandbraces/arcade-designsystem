import fs from "fs";
import { defaultTheme as importedTheme } from "../../src/theme";

type PrimitivesValues = {
  mode: {
    name: "Value";
    id: string;
  };
  number: any[];
  color: {
    /** @example "color/blue/10" */
    name: string;
    /** @example "8px" */
    color: string;
    var: never;
    rootAlias: never;
  }[];
};

type ColorValues = {
  mode: {
    name: "Light" | "Dark";
    id: string;
  };
  color: {
    /** @example "color/background" */
    name: string;
    /** @example "rgb(1,1,1)"" */
    color: string;
    /** @example "color/neutral/white" */
    var: string;
    /** @example "color/neutral/white" */
    rootAlias: string;
  }[];
};

type SizesValues = {
  mode: {
    name: "Mode 1";
    id: string;
  };
  color: never;
  number: {
    /** @example "container/4xs" */
    name: string;
    /** @example "8px" */
    value: string;
    var: never;
    rootAlias: never;
  }[];
};

type BreakpointValues = {
  mode: {
    name: "Value";
    id: string;
  };
  values: {
    /** sm (375px) or md (896px) or ... */
    mode: string;
    color: never;
    number: {
      /** @example "Grid_Columns" */
      name: string;
      /** @example "4px" */
      value: string;
      var: never;
      rootAlias: never;
    }[];
  }[];
};

type BorderValues = {
  mode: {
    name: "Value";
    id: string;
  };
  values: {
    /** Mode 1 */
    mode: string;
    color: never;
    number: {
      /** @example "divider" */
      name: string;
      /** @example "8px" */
      value: string;
      var: never;
      rootAlias: never;
    }[];
  }[];
};

type FigmaTheme = {
  /**
   * Primitives, Colors, Sizes, Breakpoint, Border
   */
  name: string;
  values:
    | PrimitivesValues
    | ColorValues
    | SizesValues
    | BreakpointValues
    | BorderValues;
}[];

const input = fs.readFileSync(__dirname + "/variables2css.json", "utf8");

const figmaTheme: FigmaTheme = JSON.parse(input);

let output =
  "/** DO NOT MODIFY! This file has been auto-generated from task:generate-ts-theme-from-json.\nFor changing, consolidate tasks/generate-ts-theme-from-json/variables2css.json and rerun the task. */\n\n";

output += `import colors from "@openbricksandbraces/designtokens/dist/json/colors.json";\n\n`;
output += `export const defaultTheme = {\n`;

figmaTheme.forEach((valueSet) => {
  output += `  ${valueSet.name}: {\n`;
  if (valueSet.name === "Colors") {
    const values = valueSet.values as any as ColorValues[];

    values.forEach((colorTheme) => {
      output += `    ${colorTheme.mode.name}: {\n`;
      colorTheme.color.forEach((color) => {
        output += `      "${color.name.replace(/\//g, "-")}": colors["${color.var.split("/").slice(1).join("-")}"],\n`;
      });
      output += `    },\n\n`;
    });
  } else if (valueSet.name === "Sizes") {
    const values = valueSet.values as any as SizesValues[];

    values[0].number.forEach((size) => {
      output += `    "${size.name}": "${size.value}",\n`;
    });
    // output += `    ${sizeTheme.mode}: {\n`;
    // sizeTheme.number.forEach((size) => {
    // });
    // output += `    },\n\n`;
  }
  output += `  },\n`;
});

output += `};\n`;

const outputTheme = JSON.stringify(figmaTheme);

fs.writeFileSync(__dirname + "/generatedTheme.ts", output);

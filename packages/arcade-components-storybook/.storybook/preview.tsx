import React from "react";
import type { Preview } from "@storybook/react";
import Layout from "./layout";
import { themes } from "@storybook/theming";

export const decorators = [(storyFn: any) => <Layout>{storyFn()}</Layout>];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      disabled: true
    },
    options: {
      // this is a custom sort function that will sort stories by category, then by component then by story
      storySort: (a, b) => {
        const aSplit = a.title.split("/");
        const aCategory = aSplit[0];
        const aComponent = aSplit[1];
        const aStory = a.name;
        const aIsDoc = a.type === "docs";

        const bSplit = b.title.split("/");
        const bCategory = bSplit[0];
        const bComponent = bSplit[1];
        const bStory = b.name;
        const bIsDoc = b.type === "docs";

        // sort docs before stories
        if (aIsDoc && !bIsDoc) {
          return -10000000000;
        }

        if (!aIsDoc && bIsDoc) {
          return 10000000000;
        }

        // sort locale by category, then by component then by story
        if (aCategory === bCategory) {
          if (aComponent === bComponent) {
            return aStory.localeCompare(bStory);
          }
          return aComponent.localeCompare(bComponent);
        }
        return aCategory.localeCompare(bCategory);
      }
    },
    darkMode: {
      // Override the default dark theme
      dark: {
        ...themes.dark,
        appBg: "#0C0C0D",
        colorSecondary: "#884DFF",
        textColor: "#fff",
        textInverseColor: "#fff",
        barTextColor: "#fff",
        barSelectedColor: "#DDCCFF",
        brandImage: "./logo-white.svg"
      },
      // Override the default light theme
      light: {
        ...themes.normal,
        appBg: "#ffffff",
        colorSecondary: "#5400ff",
        textColor: "#000",
        textInverseColor: "#000",
        barTextColor: "#000",
        barSelectedColor: "#5400ff",
        brandImage: "./logo-black.svg"
      }
    }
  }
};

export default preview;

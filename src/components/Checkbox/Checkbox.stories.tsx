import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Typography from "../Typography/Typography";
import Checkbox from "./Checkbox";

export default { title: "Components/Checkbox", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Checkbox label={text("Label", "Checkbox label")} id="checkbox" />
        <Checkbox
          label={text("Label", "Checkbox label")}
          id="checkbox-2"
          disabled={boolean("Checkbox 2 disabled", false)}
        />
      </div>
    </div>
  );
};

export const WithChildren = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Checkbox label={text("Label", "Checkbox label")} id="checkbox" />
        <Checkbox
          label={text("Label", "Checkbox label")}
          id="checkbox-2"
          disabled={boolean("Checkbox 2 disabled", false)}
        >
          <Typography
            type="span"
            token="body-small"
            style={{ marginTop: "8px", display: "block"}}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Typography>
        </Checkbox>
      </div>
    </div>
  );
};

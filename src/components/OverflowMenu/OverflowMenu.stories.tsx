import { withKnobs } from "@storybook/addon-knobs";
import {
  Icon2fa,
  IconAccessible,
  IconAntennaBars3,
  IconCrop,
  IconTrash
} from "@tabler/icons";
import React from "react";
import { Divider } from "../..";
import OverflowMenu from "./OverflowMenu";
import OverflowMenuItem from "./OverflowMenuItem";

export default {
  title: "Components/OverflowMenu",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
      <OverflowMenu>
        <OverflowMenuItem icon={<Icon2fa />}>Enable 2FA</OverflowMenuItem>
        <OverflowMenuItem icon={<IconAccessible />}>
          Turn on accessibility
        </OverflowMenuItem>
        <Divider />
        <OverflowMenuItem icon={<IconAntennaBars3 />}>
          Check connectivity
        </OverflowMenuItem>
        <OverflowMenuItem icon={<IconCrop />}>Crop image</OverflowMenuItem>
        <Divider />
        <OverflowMenuItem danger icon={<IconTrash />}>
          Delete
        </OverflowMenuItem>
      </OverflowMenu>
    </div>
  );
};

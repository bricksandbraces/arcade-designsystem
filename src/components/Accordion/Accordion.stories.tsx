import { select, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionSkeleton from "./AccordionSkeleton";

export default {
  title: "Components/A_REFA_Accordion",
  decorators: [withKnobs]
};

const sizeOptions = {
  Large: "large",
  Small: "small",
  Default: "default"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  return (
    <div style={{ margin: "32px" }}>
      <Accordion size={select("size", sizeOptions, defaultSize) as any}>
        <AccordionItem title="Title 1" disabled>
          Content 1
        </AccordionItem>
        <AccordionItem title="Title 2">Content 2</AccordionItem>
        <AccordionItem title="Title 3">Content 3</AccordionItem>
      </Accordion>
    </div>
  );
};

export const Controlled = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  return (
    <div style={{ margin: "32px" }}>
      <Accordion
        size={select("Size", sizeOptions, defaultSize) as any}
        openIndices={openIndices}
        onChange={(i) => {
          if (openIndices.includes(i)) {
            setOpenIndices(
              openIndices.filter((selectedItemIndex) => i !== selectedItemIndex)
            );
          } else {
            setOpenIndices([...openIndices, i]);
          }
        }}
      >
        <AccordionItem title="Title 1">Content 1</AccordionItem>
        <AccordionItem title="Title 2">Content 2</AccordionItem>
        <AccordionItem title="Title 3">Content 3</AccordionItem>
      </Accordion>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ margin: "32px" }}>
      <AccordionSkeleton
        size={select("Size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};

import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import SkeletonAnimatedContainer from "./SkeletonAnimatedContainer";
import SkeletonContainer from "./SkeletonContainer";
import SkeletonText from "./SkeletonText";

export default { title: "Components/Skeleton", decorators: [withKnobs] };

export const AnimatedContainer = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <SkeletonAnimatedContainer />
    </div>
  );
};

export const Container = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <SkeletonContainer />
    </div>
  );
};

export const Text = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <SkeletonText />
    </div>
  );
};

import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React from "react";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";

export type RadioTileSkeletonProps = {
  /**
   * RadioTileSkeleton ClassName
   */
  className?: string;
};

export const RadioTileSkeleton = function RadioTileSkeleton({
  className
}: RadioTileSkeletonProps) {
  return (
    <SkeletonAnimatedContainer
      style={{ width: 128 }}
      className={cx(
        `${prefix}--radiotile ${prefix}--tile`,

        className
      )}
    />
  );
};

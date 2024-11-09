import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React from "react";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";

export type TileSkeletonProps = {
  /**
   * TileSkeleton ClassName
   */
  className?: string;
};

export const TileSkeleton = function TileSkeleton({
  className
}: TileSkeletonProps) {
  return (
    <SkeletonAnimatedContainer
      style={{ width: 128 }}
      className={cx(
        `${prefix}--tile`,

        className
      )}
    />
  );
};

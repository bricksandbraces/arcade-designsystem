import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React from "react";
import { SkeletonAnimatedContainer } from "./SkeletonAnimatedContainer";

export type SkeletonTextProps = {
  /**
   * SkeletonText ClassName
   */
  className?: string;

  /**
   * SkeletonText InlineStyle
   */
  style?: React.CSSProperties;
};

export const SkeletonText = React.forwardRef(function SkeletonText(
  { className, ...rest }: SkeletonTextProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <SkeletonAnimatedContainer
      className={cx(`${prefix}--skeleton-text`, className)}
      ref={ref}
      {...rest}
    />
  );
});

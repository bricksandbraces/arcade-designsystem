import cx from "classnames";
import React from "react";
import { prefix } from "@bricksandbraces/arcade-tokens/settings";
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

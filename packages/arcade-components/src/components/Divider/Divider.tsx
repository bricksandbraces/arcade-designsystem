import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React from "react";

export type DividerProps = {
  /**
   * Divider Type
   */
  type?: "default" | "subtle" | "harsh";

  /**
   * Divider ClassName
   */
  className?: string;
};

export const Divider = React.forwardRef(function Divider(
  { type = "default", className }: DividerProps,
  ref: React.ForwardedRef<HTMLHRElement>
) {
  return (
    <hr
      className={cx(
        `${prefix}--divider ${prefix}--divider-${type}`,

        className
      )}
      ref={ref}
    />
  );
});

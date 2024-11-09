import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React from "react";

export type NavigationHeaderProps = {
  /**
   * NavigationHeader Children
   */
  children: React.ReactNode;
};

export const NavigationHeader = React.forwardRef(function NavigationHeader(
  { children }: NavigationHeaderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div ref={ref} className={cx(`${prefix}--navigation-header`)}>
      {children}
    </div>
  );
});

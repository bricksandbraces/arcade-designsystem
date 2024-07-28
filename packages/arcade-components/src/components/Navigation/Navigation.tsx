import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React from "react";

export type NavigationProps = {
  /**
   * Navigation Children
   */
  children: React.ReactNode;
};

export const Navigation = React.forwardRef(function Navigation(
  { children }: NavigationProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <header className={cx(`${prefix}--navigation`)} ref={ref}>
      {children}
    </header>
  );
});

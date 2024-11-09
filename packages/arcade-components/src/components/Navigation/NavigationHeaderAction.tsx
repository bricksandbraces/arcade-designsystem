import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React from "react";

export type NavigationHeaderActionProps = {
  /**
   * NavigationHeaderAction Children
   */
  children?: React.ReactNode;

  /**
   * NavigationHeaderAction ClassName
   */
  className?: string;
};

export const NavigationHeaderAction = React.forwardRef(
  function NavigationHeaderAction(
    { className, children, ...rest }: NavigationHeaderActionProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    return (
      <div
        {...rest}
        className={cx(`${prefix}--navigation-header__action`, className)}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

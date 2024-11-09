import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React, { ReactNode } from "react";

export type ProgressProps = {
  /**
   * Progress Children
   */
  children?: ReactNode;

  /**
   * Progress Classnames
   */
  className?: string;

  /**
   * Progress Vertical
   */
  vertical?: boolean;
};

export const Progress = function Progress({
  children,
  className,
  vertical,
  ...rest
}: ProgressProps) {
  return (
    <ul
      className={cx(
        `${prefix}--progress`,
        { [`${prefix}--progress-vertical`]: vertical === true },
        className
      )}
      {...rest}
    >
      {children}
    </ul>
  );
};

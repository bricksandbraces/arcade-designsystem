import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { Divider } from "../..";

export type HeaderDividerProps = {
  /**
   * HeaderDividerProps ClassName
   */
  className?: string;
};

export const HeaderDivider = React.forwardRef(function HeaderDivider(
  { className }: HeaderDividerProps,
  ref: React.ForwardedRef<HTMLHRElement>
) {
  return (
    <Divider
      type="default"
      className={cx(`${prefix}--navigation-header__divider`, className)}
      ref={ref}
    />
  );
});

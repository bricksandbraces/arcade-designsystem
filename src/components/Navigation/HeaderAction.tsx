import React from "react";
import { prefix } from "../../settings";
import cx from "classnames";

export type HeaderActionProps = {
  /**
   * HeaderAction Children
   */
  children?: React.ReactNode;

  /**
   * HeaderAction ClassName
   */
  className?: string;
};

const HeaderAction = (
  { className, children, ...rest }: HeaderActionProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      {...rest}
      className={cx(`${prefix}--navigation-header__action`, className)}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(HeaderAction);
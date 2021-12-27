import cx from "classnames";
import React from "react";
import { ButtonOrAnchor } from "../..";
import { prefix } from "../../settings";

export type HeaderActionItemProps = {
  /**
   * HeaderActionItem Children
   */
  children?: React.ReactNode;

  /**
   * HeaderActionItem ClassName
   */
  className?: string;

  /**
   * HeaderActionItem Href
   */
  href?: string;

  /**
   * HeaderActionItem Selected
   */
  selected?: boolean;

  /**
   * HeaderActionItem OnClick Function
   */
  onClick?: React.MouseEventHandler<ButtonOrAnchor>;
};

export const HeaderActionItem = React.forwardRef(function HeaderActionItem(
  {
    className,
    href,
    children,
    onClick,
    selected,
    ...rest
  }: HeaderActionItemProps,
  ref: React.ForwardedRef<ButtonOrAnchor>
) {
  return (
    <>
      {href ? (
        <a
          href={href}
          {...rest}
          className={cx(
            `${prefix}--navigation-header__action-item`,
            {
              [`${prefix}--navigation-header__action-item--selected`]: selected
            },
            className
          )}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        >
          {children}
        </a>
      ) : (
        <button
          onClick={onClick}
          {...rest}
          className={cx(
            `${prefix}--navigation-header__action-item`,
            {
              [`${prefix}--navigation-header__action-item--selected`]: selected
            },
            className
          )}
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
        >
          {children}
        </button>
      )}
    </>
  );
});

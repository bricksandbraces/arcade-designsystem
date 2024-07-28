import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React from "react";
import { ButtonOrAnchor } from "../Button/Button";

export type ClickableTileProps = {
  /**
   * ClickableTile ClassName
   */
  className?: string;

  /**
   * ClickableTile Href
   */
  href?: string;

  /**
   * ClickableTile Light
   */
  light?: boolean;

  /**
   * ClickableTile Target
   */
  target?: string;

  /**
   * ClickableTile Disabled
   */
  disabled?: boolean;

  /**
   * ClickableTile readOnly
   */
  readOnly?: boolean;

  /**
   * ClickableTile onClick
   */
  onClick?: React.MouseEventHandler<ButtonOrAnchor>;

  /**
   * ClickableTile onMouseEnter
   */
  onMouseEnter?: React.MouseEventHandler<ButtonOrAnchor>;

  /**
   * ClickableTile onMouseLeave
   */
  onMouseLeave?: React.MouseEventHandler<ButtonOrAnchor>;

  /**
   * ClickableTile onFocus
   */
  onFocus?: React.FocusEventHandler<ButtonOrAnchor>;

  /**
   * ClickableTile onBlur
   */
  onBlur?: React.FocusEventHandler<ButtonOrAnchor>;

  /**
   * ClickableTile Children
   */
  children?: React.ReactNode;
};

export const ClickableTile = React.forwardRef(function ClickableTile(
  {
    children,
    className,
    disabled,
    readOnly,
    onClick,
    light,
    href,
    ...rest
  }: ClickableTileProps,
  ref: React.ForwardedRef<ButtonOrAnchor>
) {
  const classes = cx(
    `${prefix}--tile ${prefix}--tile-clickable`,
    {
      [`${prefix}--tile-light`]: light,
      [`${prefix}--tile-disabled`]: disabled,
      [`${prefix}--tile-readonly`]: readOnly
    },
    className
  );
  return (
    <>
      {href ? (
        <a
          aria-disabled={disabled}
          className={classes}
          {...rest}
          href={href}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        >
          {children}
        </a>
      ) : (
        <button
          disabled={disabled}
          className={classes}
          {...rest}
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
        >
          {children}
        </button>
      )}
    </>
  );
});

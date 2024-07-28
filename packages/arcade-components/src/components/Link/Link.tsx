import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React, { ReactNode } from "react";

export type LinkProps = {
  /**
   * Link Children
   */
  children: ReactNode;

  /**
   * Link Location
   */
  href?: string;

  /**
   * Link Target
   */
  target?: string;

  /**
   * Link Inline
   */
  inline?: boolean;

  /**
   * Link ClassName
   */
  className?: string;

  /**
   * Link Size
   */
  size?: "large" | "small" | "default";

  /**
   * Link Icon
   */
  icon?: ReactNode;

  /**
   * Link IconPosition
   */
  iconPosition?: "start" | "end";

  /**
   * Link OnClick Event
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export const Link = React.forwardRef(function Link(
  {
    children,
    href,
    target,
    inline,
    size = "default",
    icon,
    iconPosition = "end",
    onClick,
    className,
    ...rest
  }: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
  const Element = React.createElement(href ? "a" : "button").type;

  return (
    <Element
      className={cx(
        `${prefix}--link ${prefix}--link-${size}`,
        {
          [`${prefix}--link-icon__${iconPosition}`]: iconPosition && icon,
          [`${prefix}--link-inline`]: inline
        },
        className
      )}
      {...rest}
      {...({ ref } as any)} // Fix for too complex union type
      href={href}
      target={target}
      onClick={onClick as React.MouseEventHandler<HTMLElement>}
    >
      <span className={`${prefix}--link-label`}>{children}</span>
      {!inline && icon}
    </Element>
  );
});

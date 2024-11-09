import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React, { ReactNode } from "react";

export type NavigationHeaderNavMenuItemProps = {
  /**
   * NavigationHeaderNavMenuItem Message
   */
  children?: string;

  /**
   * NavigationHeaderNavMenuItem Icon
   */
  icon?: ReactNode;

  /**
   * NavigationHeaderNavMenuItem Danger
   */
  danger?: boolean;

  /**
   * NavigationHeaderNavMenuItem Title
   */
  title?: string;

  /**
   * NavigationHeaderNavMenuItem TabIndex
   */
  tabIndex?: number;

  /**
   * NavigationHeaderNavMenuItem Href
   */
  href?: string;

  /**
   * NavigationHeaderNavMenuItem onClose Function
   */
  onClose?: (event: any) => void;

  /**
   * NavigationHeaderNavMenuItem onClick Function
   */
  onClick?: (event: any) => void;
};

export const NavigationHeaderNavMenuItem = function ({
  children,
  icon,
  danger,
  href,
  ...rest
}: NavigationHeaderNavMenuItemProps) {
  const classes = cx(`${prefix}--overflowmenu-item`, {
    [`${prefix}--overflowmenu-item__danger`]: danger
  });
  return (
    <>
      {href ? (
        <a href={href} title={children} className={classes} {...rest}>
          <div>
            <p>{children}</p>
            {icon}
          </div>
        </a>
      ) : (
        <button
          aria-label={children}
          title={children}
          type="button"
          className={classes}
          {...rest}
        >
          <div>
            <p>{children}</p>
            {icon}
          </div>
        </button>
      )}
    </>
  );
};
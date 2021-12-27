import cx from "classnames";
import React, { ReactNode } from "react";
import { prefix } from "../../settings";

export type SideNavItemProps = {
  /**
   * SideNavItem Href
   */
  href?: string;

  /**
   * SideNavItem Label
   */
  label?: string;

  /**
   * SideNavItem ClassName
   */
  className?: string;

  /**
   * SideNavItem Children
   */
  children?: ReactNode;

  /**
   * SideNavItem Icon
   */
  icon?: ReactNode;

  /**
   * SideNavItem FromHeader
   */
  fromHeader?: boolean;

  /**
   * SideNavItem Selected
   */
  selected?: boolean;

  /**
   * SideNavItem OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const SideNavItem = React.forwardRef(function SideNavItem(
  {
    href,
    label,
    icon,
    selected,
    fromHeader,
    className,
    onClick
  }: SideNavItemProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  return (
    <>
      {href ? (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={cx(
            `${prefix}--sidenav-item`,
            {
              [`${prefix}--sidenav-item__selected`]: selected,
              [`${prefix}--sidenav-item__with-icon`]: icon,
              [`${prefix}--sidenav-from-header`]: fromHeader
            },
            className
          )}
        >
          {icon && (
            <div className={`${prefix}--sidenav-item__icon`}>{icon}</div>
          )}
          <div className={`${prefix}--sidenav-item__label`}>{label}</div>
        </a>
      ) : (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          onClick={onClick}
          className={cx(
            `${prefix}--sidenav-item`,
            {
              [`${prefix}--sidenav-item__selected`]: selected,
              [`${prefix}--sidenav-item__with-icon`]: icon,
              [`${prefix}--sidenav-from-header`]: fromHeader
            },
            className
          )}
        >
          {icon && (
            <div className={`${prefix}--sidenav-item__icon`}>{icon}</div>
          )}
          <div className={`${prefix}--sidenav-item__label`}>{label}</div>
        </button>
      )}
    </>
  );
});

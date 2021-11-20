import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { useControlledValue } from "../../hooks/useControlled";
import { filterForKeys } from "../../helpers/keyboardUtilities";

export type SideNavProps = {
  /**
   * SideNav Children
   */
  children: React.ReactNode;

  /**
   * SideNav Action
   */
  action?: React.ReactNode;

  /**
   * SideNav Open
   */
  open?: boolean;

  /**
   * SideNav DefaultOpen
   */
  defaultOpen?: boolean;

  /**
   * SideNav OnOpenChange
   */
  onOpenChange?: (newOpen: boolean) => void;

  /**
   * SideNav Logo
   */
  logo: React.ReactNode | SVGElement;

  /**
   * SideNav LogoAlt
   */
  logoAlt?: string;

  /**
   * SideNav Basepath
   */
  basePath: string;
};

const SideNav = (
  {
    open,
    defaultOpen,
    onOpenChange,
    action,
    logo,
    children,
    basePath,
    logoAlt = "Logo"
  }: SideNavProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const [currentlyOpen, performChange] = useControlledValue(
    open,
    defaultOpen,
    onOpenChange,
    false
  );
  return (
    <>
      <div
        ref={ref}
        className={cx(`${prefix}--sidenav`, {
          [`${prefix}--sidenav-open`]: currentlyOpen
        })}
      >
        <div className={cx(`${prefix}--sidenav-head`)}>
          <a href={basePath} className={cx(`${prefix}--sidenav-logo`)}>
            {typeof logo === "string" ? (
              <img alt={logoAlt} src={`${logo}`} />
            ) : (
              logo
            )}
          </a>
          {action}
        </div>
        {children}
      </div>
      <div
        role="button"
        className={cx(`${prefix}--sidenav-overlay`)}
        tabIndex={0}
        onKeyDown={filterForKeys(["Enter", " "], () => {
          performChange(!currentlyOpen);
        })}
        onClick={() => {
          performChange(!currentlyOpen);
        }}
      />
    </>
  );
};

export default React.forwardRef(SideNav);

import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React from "react";

export type BreadcrumbProps = {} & React.HTMLAttributes<HTMLElement>;

export const Breadcrumb = React.forwardRef(function Breadcrump(
  { className, children, ...rest }: BreadcrumbProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <nav className={cx(`${prefix}--breadcrumb`, className)} {...rest} ref={ref}>
      <ol className={cx(`${prefix}--breadcrumb-list`, className)}>
        {children}
      </ol>
    </nav>
  );
});

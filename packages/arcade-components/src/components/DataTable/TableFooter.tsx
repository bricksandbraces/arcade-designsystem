import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import React from "react";

export type TableFooterProps = {
  /**
   * Table Children
   */
  children: React.ReactNode;
};

export const TableFooter = React.forwardRef(function TableFooter(
  { children }: TableFooterProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={`${prefix}--datatable-footer`} ref={ref}>
      {children}
    </div>
  );
});

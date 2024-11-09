import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import React from "react";

export type TableHeaderProps = {
  /**
   * Table Children
   */
  children: React.ReactNode;
};

export const TableHeader = React.forwardRef(function TableHeader(
  { children }: TableHeaderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={`${prefix}--datatable-header`} ref={ref}>
      {children}
    </div>
  );
});

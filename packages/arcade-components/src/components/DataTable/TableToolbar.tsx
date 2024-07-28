import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import React from "react";

export type TableToolbarProps = {
  /**
   * TableToolbar React children
   */
  children: React.ReactNode;

  /**
   * TableToolbar Selected IDs
   */
  selectedIDs?: string[];

  batchActions?: React.ReactNode;
};

export const TableToolbar = React.forwardRef(function TableToolbar(
  { children, selectedIDs, batchActions, ...rest }: TableToolbarProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={`${prefix}--datatable-toolbar`} {...rest} ref={ref}>
      {selectedIDs?.length ? batchActions : children}
    </div>
  );
});

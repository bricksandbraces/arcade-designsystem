import React from "react";
import { prefix } from "@bricksandbraces/arcade-tokens/settings";

export type TableRowProps = {
  /**
   * React children
   */
  children: React.ReactNode;
};

export const TableRow = React.forwardRef(function TableRow(
  { children, ...rest }: TableRowProps,
  ref: React.ForwardedRef<HTMLTableRowElement>
) {
  return (
    <tr className={`${prefix}--datatable-row`} {...rest} ref={ref}>
      {children}
    </tr>
  );
});

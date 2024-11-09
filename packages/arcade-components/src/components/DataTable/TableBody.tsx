import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import React from "react";

export type TableBodyProps = {
  /**
   * React children
   */
  children: React.ReactNode;
};

export const TableBody = React.forwardRef(function TableBody(
  { children, ...rest }: TableBodyProps,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) {
  return (
    <tbody {...rest} ref={ref} className={`${prefix}--datatable-body`}>
      {children}
    </tbody>
  );
});

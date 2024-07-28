import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import React, { ReactNode } from "react";

export type TableProps = {
  /**
   * React Children
   */
  children: ReactNode;
};

export const Table = React.forwardRef(function Table(
  { children, ...rest }: TableProps,
  ref: React.ForwardedRef<HTMLTableElement>
) {
  return (
    <table className={`${prefix}--datatable-table`} {...rest} ref={ref}>
      {children}
    </table>
  );
});

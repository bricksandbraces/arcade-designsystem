import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import React from "react";

export type TableToolbarActionsProps = {
  /**
   * TableToolbarActions Children
   */
  children: React.ReactNode;
};

export const TableToolbarActions = React.forwardRef(
  function TableToolbarActions(
    { children, ...rest }: TableToolbarActionsProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    return (
      <div
        className={`${prefix}--datatable-toolbar__actions`}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

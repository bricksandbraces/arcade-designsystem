import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import React from "react";

export type TableContainerProps = {
  /**
   * React children
   */
  children: React.ReactNode;
};

export const TableContainer = function TableContainer({
  children
}: TableContainerProps) {
  return (
    <div className={`${prefix}--datatable-container`}>
      <div className={`${prefix}--datatable-container__content`}>
        {children}
      </div>
    </div>
  );
};

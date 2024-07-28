import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React from "react";
import { TableHeadCell } from "../..";

export type TableSelectionRadioHeaderCellProps = {};

export const TableSelectionRadioHeaderCell = React.forwardRef(
  function TableSelectionRadioHeaderCell(
    { ...rest }: TableSelectionRadioHeaderCellProps,
    ref: React.ForwardedRef<HTMLTableCellElement>
  ) {
    return (
      <TableHeadCell
        className={cx(`${prefix}--datatable-body__cell-selection`)}
        ref={ref}
        {...rest}
      >
        <span />
      </TableHeadCell>
    );
  }
);

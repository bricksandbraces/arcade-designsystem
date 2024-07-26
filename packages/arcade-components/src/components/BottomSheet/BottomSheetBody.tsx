import cx from "classnames";
import React from "react";
import { prefix } from "@bricksandbraces/arcade-tokens/settings";

export type BottomSheetBodyProps = {
  /**
   * BottomSheetBody Children
   */
  children: React.ReactNode;

  /**
   * BottomSheetBody ClassName
   */
  className?: string;
};

export const BottomSheetBody = React.forwardRef(function BottomSheetBody(
  { children, className }: BottomSheetBodyProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={cx(`${prefix}--bottomsheet-body`, className)} ref={ref}>
      <div className={`${prefix}--bottomsheet-body__content`}>{children}</div>
    </div>
  );
});

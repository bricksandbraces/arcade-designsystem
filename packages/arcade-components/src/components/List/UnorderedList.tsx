import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React, { ReactNode } from "react";

export type UnorderedListProps = {
  /**
   * UnorderedList Children
   */
  children?: ReactNode;

  /**
   * UnorderedList ClassName
   */
  className?: string;

  /**
   * UnorderedList Nested
   */
  nested?: boolean;
};

export const UnorderedList = function UnorderedList({
  nested,
  children,
  className
}: UnorderedListProps) {
  return (
    <ul
      className={cx(
        `${prefix}--list ${prefix}--list-unordered`,
        { [`${prefix}--list-nested`]: nested },
        className
      )}
    >
      {children}
    </ul>
  );
};

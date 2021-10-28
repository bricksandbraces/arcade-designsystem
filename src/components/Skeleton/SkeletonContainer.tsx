import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type SkeletonContainerProps = {
  /**
   * SkeletonContainer Children
   */
  children?: ReactNode;

  /**
   * SkeletonContainer ClassName
   */
  className?: string;
};

const SkeletonContainer = ({ children, className }: SkeletonContainerProps) => {
  return (
    <div
      className={cx(
        `${prefix}--skeleton ${prefix}--skeleton-container`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default SkeletonContainer;

import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { SkeletonContainer } from "../Skeleton/SkeletonContainer";
import { SkeletonText } from "../Skeleton/SkeletonText";

export type CodeSnippetSkeletonProps = {
  /**
   * CodeSnippetSkeleton ClassName
   */
  className?: string;

  /**
   * CodeSnippetSkeleton Type
   */
  type?: "multi" | "single";
};

export const CodeSnippetSkeleton = function CodeSnippetSkeleton({
  type = "multi",
  className
}: CodeSnippetSkeletonProps) {
  return (
    <SkeletonContainer
      style={{ width: "100%" }}
      className={cx(
        `${prefix}--codesnippet ${prefix}--codesnippet-${type}`,

        className
      )}
    >
      <div
        style={{
          width: "75%",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          justifyContent: "center"
        }}
      >
        <SkeletonText style={{ width: "100%" }} />
        {type === "multi" && (
          <>
            <SkeletonText style={{ width: "100%" }} />
            <SkeletonText style={{ width: "100%" }} />
            <SkeletonText style={{ width: "75%" }} />
          </>
        )}
      </div>
    </SkeletonContainer>
  );
};

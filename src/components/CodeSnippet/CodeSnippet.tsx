import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import cx from "classnames";
import React, { useState } from "react";
import { prefix } from "../../settings";
import { Button } from "../Button/Button";
import { CopyButton } from "../CopyButton/CopyButton";

export type CodeSnippetProps = {
  /**
   * CodeSnippet Code
   */
  code: string;

  /**
   * CodeSnippet Show More Label
   */
  showMoreLabel?: string;

  /**
   * CodeSnippet Show Less Label
   */
  showLessLabel?: string;

  /**
   * CodeSnippet Button TooltipLabel
   */
  tooltipLabel?: string;

  /**
   * CodeSnippet Button TooltipLabel Copied
   */
  tooltipLabelCopied?: string;

  /**
   * CodeSnippet ClassName
   */
  className?: string;

  /**
   * CodeSnippet Light
   */
  light?: boolean;

  /**
   * CodeSnippet Type
   */
  type?: "multi" | "single";
};

export const CodeSnippet = React.forwardRef(function CodeSnippet(
  {
    code,
    className,
    showMoreLabel = "Show more",
    showLessLabel = "Show less",
    light,
    tooltipLabel = "Copy",
    tooltipLabelCopied = "Copy Cat!",
    type = "multi",
    ...rest
  }: CodeSnippetProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={cx(
        `${prefix}--codesnippet-container ${prefix}--codesnippet-${type}`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <pre className={`${prefix}--codesnippet-pre`} tabIndex={0}>
        <code className={cx(`${prefix}--codesnippet-code`)}>{code}</code>
      </pre>
      {type === "multi" && (
        <Button
          className={cx(`${prefix}--codesnippet-showmorebutton`)}
          size="small"
          icon={expanded ? <IconChevronUp /> : <IconChevronDown />}
          iconPosition="right"
          kind="ghost"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? showLessLabel : showMoreLabel}
        </Button>
      )}
      <div className={cx(`${prefix}--codesnippet-singlegradient`)} />
      <CopyButton
        className={cx(`${prefix}--codesnippet-copybutton`)}
        valueToCopy={code}
        tooltipLabel={tooltipLabel}
        onClick={() => {}}
        tooltipLabelCopied={tooltipLabelCopied}
        size="small"
      />
    </div>
  );
});

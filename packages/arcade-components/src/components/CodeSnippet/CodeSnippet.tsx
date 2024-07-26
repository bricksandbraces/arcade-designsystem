import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import cx from "classnames";
import React, { useRef, useState } from "react";
import { prefix } from "@bricksandbraces/arcade-tokens/settings";
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

  const copyButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className={cx(
        `${prefix}--codesnippet-container ${prefix}--codesnippet-${type}`,
        {
          [`${prefix}--codesnippet-container-expanded`]: expanded
        },
        className
      )}
      {...rest}
      ref={ref}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-noninteractive-element-interactions */}
      <pre
        className={`${prefix}--codesnippet-pre`}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onKeyDown={(event) => {
          if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toUpperCase() === "C"
          ) {
            copyButtonRef.current?.click();
          }
        }}
      >
        {type === "multi" && (
          <div className={cx(`${prefix}--codesnippet-multilinecode`)}>
            {code.split("\n").map((line, index) => (
              <div key={index} className={cx(`${prefix}--codesnippet-line`)}>
                <span className={cx(`${prefix}--codesnippet-linenum`)}>
                  {index + 1}
                </span>
                <code className={cx(`${prefix}--codesnippet-code`)}>
                  {line}
                </code>
              </div>
            ))}
          </div>
        )}

        {type === "single" && (
          <code className={cx(`${prefix}--codesnippet-code`)}>{code}</code>
        )}
      </pre>

      <div className={cx(`${prefix}--codesnippet-rightgradient`)} />
      <CopyButton
        ref={copyButtonRef}
        className={cx(`${prefix}--codesnippet-copybutton`)}
        valueToCopy={code}
        tooltipLabel={tooltipLabel}
        tooltipLabelCopied={tooltipLabelCopied}
        size="small"
      />
      {type === "multi" && (
        <div className={cx(`${prefix}--codesnippet-showmore`)}>
          <Button
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
        </div>
      )}
    </div>
  );
});

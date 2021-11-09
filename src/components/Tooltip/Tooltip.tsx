import React, { JSXElementConstructor, ReactElement } from "react";
import Tippy from "@tippyjs/react";
import type { TippyProps } from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";
import cx from "classnames";
import { roundArrow } from "tippy.js";
import { prefix } from "../../settings";

export type TooltipProps = {
  /**
   * Tooltip Children
   */
  children?: ReactElement<any, string | JSXElementConstructor<any>>;

  /**
   * Tooltip Theme
   */
  theme?: "light" | "dark";

  /**
   * Tooltip Content
   */
  tooltipContent: React.ReactNode;
} & Omit<TippyProps, "content">;

const Tooltip = ({
  children,
  theme = "light",
  tooltipContent,
  ...props
}: TooltipProps) => {
  return (
    <Tippy
      className={cx(`${prefix}--tooltip ${prefix}--tooltip-default`)}
      arrow={roundArrow}
      animation="bbds-animation"
      duration={150}
      theme={theme === "light" ? "bbds-light" : "bbds-dark"}
      {...props}
      content={tooltipContent}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;

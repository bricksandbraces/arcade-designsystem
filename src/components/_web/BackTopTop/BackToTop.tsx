import React, { useState } from "react";
import cx from "classnames";
import { prefix } from "../../../settings";
import { IconOnlyButton } from "../../Button/IconOnlyButton";
import { IconArrowBarToUp } from "@tabler/icons";

export type BackToTopProps = {};

export const BackToTop = React.forwardRef(
  function BackToTop({}: BackToTopProps) {
    const height = 128;
    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > height) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= height) {
        setShowScroll(false);
      }
    };
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("scroll", checkScrollTop);
    return (
      <section
        className={cx(`${prefix}--backtotop-container`, {
          [`${prefix}--backtotop-container__visible`]: showScroll
        })}
      >
        <IconOnlyButton
          hideTooltip
          kind="primary"
          onClick={scrollTop}
          className={cx(`${prefix}--backtotop`)}
          icon={<IconArrowBarToUp />}
          size="large"
        />
      </section>
    );
  }
);

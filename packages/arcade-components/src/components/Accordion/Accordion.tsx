import settings from "@bricksandbraces/arcade-tokens/dist/settings";
import { IconChevronDown } from "@tabler/icons-react";
import cx from "classnames";
import React, { ReactNode, useEffect, useState } from "react";
import { mapReactChildren } from "../../helpers/reactUtilities";
import { useControlled } from "../../hooks/useControlled";
import { AccordionItemProps } from "./AccordionItem";

const { prefix } = settings;

export type AccordionProps = {
  /**
   * Accordion Children
   */
  children?: ReactNode;

  /**
   * Accordion Size
   */
  size?: "large" | "default" | "small";

  /**
   * Accordion ClassName
   */
  className?: string;

  /**
   * Accordion OnChange Function delivering the toggled index
   */
  onChange?: (
    selectedIndex: number,
    newOpenState: boolean,
    newOpenIndexList: number[]
  ) => void;

  /**
   * Accordion Default Open Indices
   */
  defaultOpenIndices?: number[];

  /**
   * Accordion Open Indices
   */
  openIndices?: number[];

  /**
   * Accordion Light
   */
  light?: boolean;
};

const TEMP = (
  <ul className="bb--accordion bb--accordion-small">
    <li className="bb--accordion-list__item">
      <button>
        <p>Accordion Item title</p>
        <svg className="chevron" />
      </button>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
      </div>
    </li>
    <li className="bb--accordion-list__item">
      <button>
        <p>Accordion Item title</p>
        <svg className="chevron" />
      </button>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
      </div>
    </li>
  </ul>
);

const _Accordion = (
  {
    children,
    className,
    onChange,
    size = "default",
    defaultOpenIndices,
    openIndices
  }: AccordionProps,
  ref: React.ForwardedRef<HTMLUListElement>
) => {
  const controlled = useControlled(openIndices);

  const [openIndexList, setOpenIndexList] = useState<number[]>(
    (controlled ? openIndices : defaultOpenIndices) ?? []
  );

  useEffect(() => {
    if (controlled) {
      setOpenIndexList(openIndices ?? []);
    }
  }, [openIndices]);

  return (
    <ul
      className={cx(
        `${prefix}--accordion ${prefix}--accordion-${size}`,
        className
      )}
      ref={ref}
    >
      {mapReactChildren<AccordionItemProps>(
        children,
        ({ props, index, key }) => {
          const open = openIndexList.includes(index);
          return (
            <li
              key={key}
              className={cx(`${prefix}--accordion-list__item`, {
                [`${prefix}--accordion-list__item-open`]: open
              })}
            >
              <button
                id={`${props.id}_label`}
                disabled={props.disabled}
                aria-expanded={open}
                aria-controls={`${props.id}_content`}
                onClick={() => {
                  const alreadyOpen = openIndexList.includes(index);
                  const newOpenList = alreadyOpen
                    ? openIndexList.filter(
                        (selectedItemIndex) => index !== selectedItemIndex
                      )
                    : [...openIndexList, index];
                  if (!controlled) {
                    setOpenIndexList(newOpenList);
                  }
                  onChange?.(index, !alreadyOpen, newOpenList);
                }}
              >
                <p>{props.title}</p>
                <IconChevronDown size={16} />
              </button>
              <div
                id={`${props.id}_content`}
                aria-labelledby={`${props.id}_label`}
              >
                {props.children}
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
};

export const Accordion = React.memo(React.forwardRef(_Accordion));

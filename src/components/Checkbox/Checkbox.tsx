import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type CheckboxProps = {
  /**
   * Checkbox ClassName
   */
  className?: string;

  /**
   * Checkbox Id
   */
  id: string;

  /**
   * Checkbox Children
   */
  children?: ReactNode;

  /**
   * Checkbox Label
   */
  label?: string;

  /**
   * Checkbox Read-Only
   */
  readOnly?: boolean;

  /**
   * Checked values
   */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  value: string;
};

const Checkbox = ({
  id,
  value,
  checked,
  defaultChecked,
  label,
  readOnly,
  className,
  children,
  onChange,
  ...rest
}: CheckboxProps) => {
  return (
    <div
      className={cx(
        `${prefix}--checkbox`,
        { [`${prefix}--checkbox-readonly`]: readOnly },
        className
      )}
    >
      <input
        tabIndex={0}
        className={`${prefix}--checkbox-input`}
        type="checkbox"
        value={value}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <label className={`${prefix}--checkbox-label`} htmlFor={id}>
        <svg
          className={`${prefix}--checkbox-check`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            className={`${prefix}--checkbox-check__box`}
          />
          <path
            d="M9 12l2 2l4 -4"
            className={`${prefix}--checkbox-check__mark`}
          />
        </svg>

        <div>
          {label && (
            <div className={`${prefix}--checkbox-label__text`}>{label}</div>
          )}
          {children && (
            <div className={`${prefix}--checkbox-content`}>{children}</div>
          )}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;

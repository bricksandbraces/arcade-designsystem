import { prefix } from "@bricksandbraces/arcade-tokens/dist/settings";
import cx from "classnames";
import React, { ReactNode } from "react";

export type AvatarProps = {
  /**
   * Avatar ClassName
   */
  className?: string;

  /**
   * Avatar React Children
   */
  children?: ReactNode | string;

  /**
   *  Avatar Size
   *  */
  size?: "large" | "default" | "small";

  /**
   * Avatar Name (required for accessibility)
   */
  name: string;

  /**
   * Avatar Image URL
   */
  imgUrl?: string;
};

export const Avatar = React.forwardRef(function Avatar(
  { size = "default", className, name, imgUrl, children }: AvatarProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={cx(`${prefix}--avatar-container`, className)} ref={ref}>
      <div className={cx(`${prefix}--avatar ${prefix}--avatar-${size}`)}>
        {imgUrl ? (
          <img src={imgUrl} className={`${prefix}--avatar-img`} alt={name} />
        ) : (
          <span className={`${prefix}--avatar-alt`}>
            {children}
            <p className={`${prefix}--avatar-alt__text`}>
              {!children &&
                name
                  ?.split(" ")
                  .map((str) => str[0] ?? "")
                  .join("")}
            </p>
          </span>
        )}
      </div>
    </div>
  );
});

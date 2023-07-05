import classNames from "classnames";
import { createElement } from "react";
import { IText } from "./Text.interface";

export const Text = ({
  as = "p",
  children,
  size = "md",
  className,
  ...props
}: IText) => {
  return createElement(
    as,
    {
      className: classNames(
        {
          ["text-[14px] leading-[19px]"]: size === "sm",
          ["text-[16px] leading-[21px]"]: size === "md",
          ["text-[18px] leading-[24px]"]: size === "lg",
        },
        className
      ),
      ...props,
    },
    children
  );
};

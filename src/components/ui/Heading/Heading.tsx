import classNames from "classnames";
import { createElement } from "react";
import { IHeading } from "./Heading.interface";

export const Heading = ({
  as = "h1",
  children,
  size = "lg",
  className,
  ...props
}: IHeading) => {
  return createElement(
    as,
    {
      className: classNames(
        "font-semibold",
        {
          ["text-[26px] leading-[35px]"]: size === "lg",
          ["text-[22px] leading-[29px]"]: size === "md",
          ["text-[20px] leading-[27px]"]: size === "sm",
        },
        className
      ),
      ...props,
    },
    children
  );
};

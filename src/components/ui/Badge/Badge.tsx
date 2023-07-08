import classNames from "classnames";
import Link from "next/link";
import { IBadge } from "./Badge.interface";

export const Badge = ({
  children,
  size = "lg",
  appearance = "primary",
  href,
  className,
  ...props
}: IBadge) => {
  if (href) {
    <Link
      href={href}
      className={classNames(
        "inline-block w-fit rounded-[20px] border font-semibold",
        {
          ["px-[8px] py-[2px] text-[12px] leading-[16px]"]: size === "sm",
          ["px-[10px] py-[5px] text-[14px] leading-[19px]"]: size === "lg",
          ["border-[#B3C0D9] bg-[#B3C0D9] text-white"]: appearance === "gray",
          ["border-[#EBEBEB] bg-white text-[#3B434E]"]:
            appearance === "gray-outline",
          ["border-[#7653FC] bg-[#7653FC] text-white"]:
            appearance === "primary",
          ["border-[#7653FC] bg-white text-[#7653FC]"]:
            appearance === "primary-outline",
          ["border-[#DE0000] bg-[#DE0000] text-white"]: appearance === "red",
          [""]: appearance === "green",
        },
        className
      )}
      {...props}
    >
      {children}
    </Link>;
  }

  return (
    <span
      className={classNames(
        "inline-block w-fit rounded-[20px] border font-semibold",
        {
          ["px-[8px] py-[2px] text-[12px] leading-[16px]"]: size === "sm",
          ["px-[10px] py-[5px] text-[14px] leading-[19px]"]: size === "lg",
          ["border-[#B3C0D9] bg-[#B3C0D9] text-white"]: appearance === "gray",
          ["border-[#EBEBEB] bg-white text-[#3B434E]"]:
            appearance === "gray-outline",
          ["border-[#7653FC] bg-[#7653FC] text-white"]:
            appearance === "primary",
          ["border-[#7653FC] bg-white text-[#7653FC]"]:
            appearance === "primary-outline",
          ["border-[#DE0000] bg-[#DE0000] text-white"]: appearance === "red",
          [""]: appearance === "green",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

import classNames from "classnames";
import Link from "next/link";
import { IBadge } from "./Badge.interface";

export const Badge = ({
  children,
  size = "lg",
  href,
  appearance = "primary",
  className,
  ...props
}: IBadge) => {
  if (href) {
    return (
      <Link
        href={href}
        className={classNames(
          "inline-block w-fit rounded-[20px] border font-semibold focus:outline-none focus-visible:outline-[#7653FC] active:underline md:hover:underline",
          {
            ["px-[8px] py-[2px] text-[12px] leading-[16px]"]: size === "sm",
            ["px-[10px] py-[3px] text-[14px] leading-[19px]"]: size === "lg",
            ["border-[#B3C0D9] bg-[#B3C0D9] text-white"]: appearance === "gray",
            ["border-[#EBEBEB] bg-white text-[#3B434E]"]:
              appearance === "gray-outline",
            ["border-[#7653FC] bg-[#7653FC] text-white"]:
              appearance === "primary",
            ["border-[#7653FC] bg-white text-[#7653FC]"]:
              appearance === "primary-outline",
            ["border-[#DE0000] bg-[#DE0000] text-white"]: appearance === "red",
            ["border-[#C8F8E4] bg-[#C8F8E4] text-[#1DC37E]"]:
              appearance === "green",
          },
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <span
      className={classNames(
        "inline-block w-fit rounded-[20px] border font-semibold",
        {
          ["px-[8px] py-[2px] text-[12px] leading-[16px]"]: size === "sm",
          ["px-[10px] py-[3px] text-[14px] leading-[19px]"]: size === "lg",
          ["border-[#B3C0D9] bg-[#B3C0D9] text-white"]: appearance === "gray",
          ["border-[#EBEBEB] bg-white text-[#3B434E]"]:
            appearance === "gray-outline",
          ["border-[#7653FC] bg-[#7653FC] text-white"]:
            appearance === "primary",
          ["border-[#7653FC] bg-white text-[#7653FC]"]:
            appearance === "primary-outline",
          ["border-[#DE0000] bg-[#DE0000] text-white"]: appearance === "red",
          ["border-[#C8F8E4] bg-[#C8F8E4] text-[#1DC37E]"]:
            appearance === "green",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

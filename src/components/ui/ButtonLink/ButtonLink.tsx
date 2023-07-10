"use client";

import { ArrowRightIcon } from "@/imgs/icons";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { IButtonLink } from "./ButtonLink.interface";

export const ButtonLink = ({
  children,
  arrow = "none",
  appearance = "primary",
  className,
  href,
  ...props
}: IButtonLink) => {
  if (arrow !== "none") {
    return (
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={className}
        {...props}
      >
        <Link
          href={href}
          className={classNames(
            "flex min-h-[40px] w-fit items-center justify-between gap-x-[10px] rounded-[5px] border pl-[11px] pr-[9px] text-[14px] font-normal leading-[19px] focus:outline-none focus-visible:outline-[#7653FC]",
            {
              ["border-[#7653FC] bg-[#7653FC] text-white"]:
                appearance === "primary",
              ["border-[#EBEBEB] bg-white text-[#3B434E]"]:
                appearance === "secondary",
            }
          )}
        >
          <span>{children}</span>
          <ArrowRightIcon
            className={classNames(
              "h-auto w-[16px] transition-transform duration-300 ease-in-out",
              {
                ["rotate-90"]: arrow === "down",
              }
            )}
          />
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      {...props}
      className={className}
    >
      <Link
        href={href}
        className={classNames(
          "flex min-h-[40px] w-fit items-center justify-center rounded-[5px] border px-[11px] text-[14px] font-normal leading-[19px] focus:outline-none focus-visible:outline-[#7653FC]",
          {
            ["border-[#7653FC] bg-[#7653FC] text-white"]:
              appearance === "primary",
            ["border-[#EBEBEB] bg-white text-[#3B434E]"]:
              appearance === "secondary",
          }
        )}
      >
        {children}
      </Link>
    </motion.span>
  );
};

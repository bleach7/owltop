"use client";

import { ArrowRightIcon } from "@/imgs/icons";
import classNames from "classnames";
import { motion } from "framer-motion";
import { IButton } from "./Button.interface";

export const Button = ({
  children,
  arrow = "none",
  appearance = "primary",
  className,
  ...props
}: IButton) => {
  if (arrow !== "none") {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={classNames(
          "flex min-h-[40px] w-fit items-center justify-between gap-x-[10px] rounded-[5px] border pl-[11px] pr-[9px] text-[14px] font-normal leading-[19px] focus:outline-none focus-visible:outline-[#7653FC]",
          {
            ["border-[#7653FC] bg-[#7653FC] text-white"]:
              appearance === "primary",
            ["border-[#EBEBEB] bg-white text-[#3B434E]"]:
              appearance === "secondary",
          },
          className
        )}
        {...props}
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
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={classNames(
        "inline-block min-h-[40px] w-fit rounded-[5px] border px-[11px] text-[14px] font-normal leading-[19px] focus:outline-none focus-visible:outline-[#7653FC]",
        {
          ["border-[#7653FC] bg-[#7653FC] text-white"]:
            appearance === "primary",
          ["border-[#EBEBEB] bg-white text-[#3B434E]"]:
            appearance === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

Button.displayName = "Button";

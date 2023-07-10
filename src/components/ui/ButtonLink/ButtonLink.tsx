"use client";

import { ArrowRightIcon } from "@/imgs/icons";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IButtonLink } from "./ButtonLink.interface";

export const ButtonLink = ({
  children,
  arrow = "none",
  appearance = "primary",
  className,
  href,
  ...props
}: IButtonLink) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    router.push(`${href}`);
  };

  if (arrow !== "none") {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        href={href}
        onClick={handleClick}
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
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      {...props}
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
    </motion.a>
  );
};

"use client";

import { SortIcon } from "@/imgs/icons";
import classNames from "classnames";
import { motion } from "framer-motion";
import { ISortingControllers } from "./SortingControllers.interface";

export const SortingControllers = ({
  className,
  ...props
}: ISortingControllers) => {
  return (
    <section
      className={classNames(
        "flex flex-wrap items-center gap-x-[30px] gap-y-[10px] text-[16px] leading-[21px] lg:gap-x-[45px]",
        className
      )}
      {...props}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className={classNames(
          "flex min-h-[21px] items-center gap-x-[8px] transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#7653FC] md:hover:text-[#7653FC]",
          "font-bold text-[#7653FC]"
        )}
      >
        <SortIcon className="h-auto min-h-[21px] w-[20px]" />
        <span>По рейтингу</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className="flex items-center gap-x-[8px] transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#7653FC] md:hover:text-[#7653FC]"
      >
        <span>По цене</span>
      </motion.button>
    </section>
  );
};

"use client";

import { ArrowUpIcon } from "@/imgs/icons";
import classNames from "classnames";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export const ButtonScrollToTop = () => {
  const [isCrolling, setIsCrolling] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsCrolling(true);
    } else {
      setIsCrolling(false);
    }
  });

  const scrollToTop = () => {
    if (window) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      aria-label="Вернуться наверх"
      aria-hidden={isCrolling ? true : false}
      onClick={scrollToTop}
      className={classNames(
        "fixed bottom-[100px] right-[30px] z-10 focus:outline-none focus-visible:outline-[#1CC37E]",
        {
          ["pointer-events-none invisible"]: !isCrolling,
        }
      )}
    >
      <span
        className={classNames(
          "flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#7653FC] text-white transition-all duration-300 ease-in-out",
          {
            ["translate-y-2 opacity-0"]: !isCrolling,
          }
        )}
      >
        <ArrowUpIcon className="h-auto w-[25px]" />
      </span>
    </motion.button>
  );
};

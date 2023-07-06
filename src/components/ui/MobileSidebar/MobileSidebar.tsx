"use client";

import { useAppStore } from "@/hooks";
import classNames from "classnames";
import { motion } from "framer-motion";
import { Logo } from "../Logo";
import { MenuToggler } from "../MenuToggler";
import { Search } from "../Search";

const variants = {
  opened: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 20,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
  },
};

export const MobileSidebar = ({ className }: { className: string }) => {
  const { isMenuOpen, onCloseMenu } = useAppStore();

  const handleCloseMenuWithLogo = () => {
    onCloseMenu();
  };

  return (
    <motion.aside
      variants={variants}
      initial={"closed"}
      animate={isMenuOpen ? "opened" : "closed"}
      id="menu"
      className={classNames(
        "fixed left-0 top-0 z-30 h-screen w-screen overflow-y-scroll bg-[#F5F6F8]",
        className
      )}
    >
      <div className="container py-[20px]">
        <div className="flex flex-wrap items-center justify-between gap-[10px]">
          <Logo onClick={handleCloseMenuWithLogo} />
          <MenuToggler onClick={onCloseMenu} isOpen />
        </div>
        <Search className="mt-[20px]" />
      </div>
    </motion.aside>
  );
};

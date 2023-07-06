"use client";

import { useAppStore } from "@/hooks";
import { Logo } from "../Logo";
import { MenuToggler } from "../MenuToggler";
import { IHeader } from "./Header.inteface";

export const Header = ({ ...props }: IHeader) => {
  const { onOpenMenu } = useAppStore();

  return (
    <header {...props}>
      <div className="container">
        <div className="flex items-center justify-between py-[20px]">
          <Logo />
          <MenuToggler onClick={onOpenMenu} />
        </div>
      </div>
    </header>
  );
};

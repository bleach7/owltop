"use client";

import { firstLevelMenuItems } from "@/constants";
import { ETopLevelCategory } from "@/interfaces";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { ArrowDownIcon } from "../../../../public/imgs/icons";
import { IMenu } from "./Menu.interface";

export const Menu = ({ className, ...props }: IMenu) => {
  return (
    <nav className={classNames("text-[#787D85]", className)} {...props}>
      <BuildFirstLevelMenuItems />
    </nav>
  );
};

const BuildFirstLevelMenuItems = () => {
  return (
    <ul className="flex flex-col gap-y-[20px]">
      {firstLevelMenuItems.map((firstLevelMenuItem) => (
        <FirstLevelMenuItem
          key={firstLevelMenuItem.route}
          {...firstLevelMenuItem}
        />
      ))}
    </ul>
  );
};

const FirstLevelMenuItem = memo(
  ({
    route,
    name,
    icon,
  }: {
    route: string;
    name: string;
    icon: React.JSX.Element;
    id: ETopLevelCategory;
  }) => {
    const pathname = usePathname();

    return (
      <li className="flex flex-wrap items-center justify-between gap-[10px]">
        <Link
          href={`/${route}`}
          className={classNames(
            "grid w-fit grid-cols-[24px_1fr] items-center gap-x-[20px] transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#7653FC] md:hover:text-[#7653FC]",
            {
              ["text-[#7653FC]"]: pathname === `/${route}`,
            }
          )}
        >
          {icon}
          <span className="text-[18px] font-medium leading-[24px]">{name}</span>
        </Link>
        <button
          type="button"
          aria-label={`Открыть подменю ${name}`}
          className=" hidden h-[24px] w-[40px] items-center justify-center transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#7653FC] md:hover:text-[#7653FC]"
        >
          <ArrowDownIcon className="h-auto w-[20px]" />
        </button>
      </li>
    );
  }
);

FirstLevelMenuItem.displayName = "FirstLevelMenuItem";

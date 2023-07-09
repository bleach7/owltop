"use client";

import { firstLevelMenuItems } from "@/constants";
import { ArrowDownIcon } from "@/imgs/icons";
import {
  ETopLevelCategory,
  IAllMenu,
  IAllMenuItem,
  IMenuItemData,
  IMenuItemPageData,
} from "@/interfaces";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IMenu } from "./Menu.interface";

export const Menu = ({ allMenu, className, ...props }: IMenu) => {
  return (
    <nav className={classNames("text-[#787D85]", className)} {...props}>
      <BuildFirstLevelMenuItems allMenu={allMenu} />
    </nav>
  );
};

const BuildFirstLevelMenuItems = ({ allMenu }: { allMenu: IAllMenu }) => {
  return (
    <ul className="flex flex-col gap-y-[20px]">
      {firstLevelMenuItems.map((firstLevelMenuItem) => {
        const findAllMenuItem = allMenu.find(
          (item) => item.id === firstLevelMenuItem.id
        );
        if (findAllMenuItem) {
          return (
            <FirstLevelMenuItem
              allMenuItem={findAllMenuItem}
              key={firstLevelMenuItem.route}
              {...firstLevelMenuItem}
            />
          );
        }
      })}
    </ul>
  );
};

const FirstLevelMenuItem = ({
  route,
  name,
  icon,
  allMenuItem,
}: {
  route: string;
  name: string;
  icon: React.JSX.Element;
  id: ETopLevelCategory;
  allMenuItem: IAllMenuItem;
}) => {
  const pathname = usePathname();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleToggleSubMenuOpen = () => {
    setIsSubMenuOpen((prevState) => !prevState);
  };

  return (
    <li className="flex flex-col">
      <div className="flex flex-wrap items-center justify-between gap-[10px]">
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
        {allMenuItem.menuItems.length !== 0 && (
          <button
            onClick={handleToggleSubMenuOpen}
            type="button"
            aria-label={`Открыть подменю ${name}`}
            className="flex h-[24px] w-[40px] items-center justify-center transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#7653FC] md:hover:text-[#7653FC]"
          >
            <ArrowDownIcon
              className={classNames(
                "h-auto w-[20px] transition-transform duration-300 ease-in-out",
                {
                  ["rotate-180 text-[#7653FC]"]: isSubMenuOpen,
                }
              )}
            />
          </button>
        )}
      </div>
      {isSubMenuOpen && (
        <BuildSecondLevelMenuItems route={route} allMenuItem={allMenuItem} />
      )}
    </li>
  );
};

const BuildSecondLevelMenuItems = ({
  allMenuItem,
  route,
}: {
  allMenuItem: IAllMenuItem;
  route: string;
}) => {
  if (allMenuItem.menuItems.length === 0) {
    return null;
  }

  return (
    <ul className="relative mt-[20px] flex flex-col gap-y-[10px] pl-[44px] before:absolute before:left-[12px] before:top-0 before:h-full before:w-px before:bg-[#DFDFDF] before:content-['']">
      {allMenuItem.menuItems.map((menuItem) => (
        <SecondLevelMenuItem
          key={menuItem._id.secondCategory}
          menuItem={menuItem}
          route={route}
        />
      ))}
    </ul>
  );
};

const SecondLevelMenuItem = ({
  menuItem,
  route,
}: {
  menuItem: IMenuItemData;
  route: string;
}) => {
  const [isSubMenu, setIsSubMenu] = useState(false);
  const pathname = usePathname();

  const routeExists = menuItem.pages.some((page) => {
    const pageRoute = `/${route}/${page.alias}`;
    if (pageRoute === pathname) return true;

    return false;
  });

  useEffect(() => {
    if (routeExists) {
      setIsSubMenu(true);
    }
  }, [pathname, routeExists]);

  const handleToggleSubMenu = () => {
    setIsSubMenu((prevState) => !prevState);
  };

  return (
    <li>
      <button
        onClick={handleToggleSubMenu}
        type="button"
        className="inline-block text-[16px] leading-[21px] transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#7653FC] md:hover:text-[#7653FC]"
      >
        {menuItem._id.secondCategory}
      </button>
      {isSubMenu && (
        <BuildThirdLevelMenuItems route={route} pages={menuItem.pages} />
      )}
    </li>
  );
};

const BuildThirdLevelMenuItems = ({
  pages,
  route,
}: {
  pages: IMenuItemPageData[];
  route: string;
}) => {
  if (pages.length === 0) {
    return null;
  }

  return (
    <ul className="mt-[10px] flex flex-col gap-y-[5px]">
      {pages.map((page) => {
        return <ThirdLevelMenuItem route={route} page={page} key={page._id} />;
      })}
    </ul>
  );
};

const ThirdLevelMenuItem = ({
  page,
  route,
}: {
  page: IMenuItemPageData;
  route: string;
}) => {
  const pathname = usePathname();

  const productRoute = `/${route}/${page.alias}`;

  return (
    <li key={page._id} className="flex">
      <Link
        href={productRoute}
        className={classNames(
          "inline-block text-[14px] leading-[19px] transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#7653FC] md:hover:text-[#7653FC]",
          {
            ["text-[#7653FC]"]: pathname === productRoute,
          }
        )}
      >
        {page.title}
      </Link>
    </li>
  );
};

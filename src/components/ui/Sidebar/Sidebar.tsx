import classNames from "classnames";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Search } from "../Search";
import { ISidebar } from "./Sidebar.interface";

export const Sidebar = ({ allMenu, className, ...props }: ISidebar) => {
  return (
    <aside className={classNames(className)} {...props}>
      <Logo />
      <Search className="mt-[20px]" />
      <Menu allMenu={allMenu} className="mt-[30px]" />
    </aside>
  );
};

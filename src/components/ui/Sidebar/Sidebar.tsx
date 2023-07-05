import classNames from "classnames";
import { Logo } from "../Logo";
import { ISidebar } from "./Sidebar.interface";

export const Sidebar = ({ className, ...props }: ISidebar) => {
  return (
    <aside className={classNames(className)} {...props}>
      <Logo />
    </aside>
  );
};

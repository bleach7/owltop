import classNames from "classnames";
import {
  HamburgerCloseIcon,
  HamburgerOpenIcon,
} from "../../../../public/imgs/icons";
import { IMenuToggler } from "./MenuToggler.interface";

export const MenuToggler = ({
  isOpen = false,
  className,
  ...props
}: IMenuToggler) => {
  return (
    <button
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      aria-controls="menu"
      aria-expanded={isOpen}
      type="button"
      className={classNames(
        "flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-white text-[#7653FC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] focus:outline-none focus-visible:outline-[#7653FC]",
        className
      )}
      {...props}
    >
      {isOpen ? (
        <HamburgerCloseIcon className="h-auto w-[20px]" />
      ) : (
        <HamburgerOpenIcon className="h-auto w-[20px]" />
      )}
    </button>
  );
};

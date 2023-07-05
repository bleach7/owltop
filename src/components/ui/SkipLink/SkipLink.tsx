import { IAnchorElement } from "@/interfaces";
import classNames from "classnames";

export const SkipLink = ({ className, ...props }: IAnchorElement) => {
  return (
    <a
      href="#main"
      className={classNames(
        "sr-only inline-block bg-[#7653FC] text-center text-[18px] font-medium leading-[24px] text-white underline focus:outline-none focus-visible:not-sr-only focus-visible:w-full focus-visible:py-[10px]",
        className
      )}
      {...props}
    >
      Перейти к основному содержанию
    </a>
  );
};

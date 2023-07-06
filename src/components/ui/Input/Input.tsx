import classNames from "classnames";
import { forwardRef } from "react";
import { IInput } from "./Input.interface";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames(
          "inline-block min-h-[40px] w-full rounded-[5px] bg-white px-[11px] text-[16px] font-normal leading-[21px] text-[#3B434E] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] placeholder:text-[#A4A4A4] focus:outline-none focus-visible:outline-[#7653FC]",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

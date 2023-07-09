import classNames from "classnames";
import { forwardRef } from "react";
import { ITextArea } from "./TextArea.interface";

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={classNames(
          "inline-block min-h-[150px] w-full rounded-[5px] bg-white px-[11px] py-[9.5px] text-[16px] font-normal leading-[21px] text-[#3B434E] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] placeholder:text-[#A4A4A4] focus:outline-none focus-visible:outline-[#7653FC]",
          className
        )}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

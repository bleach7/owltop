"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import { IButtonGoBack } from "./ButtonGoBack.interface";

export const ButtonGoBack = ({ className, ...props }: IButtonGoBack) => {
  const router = useRouter();

  const hanldeGoBack = () => {
    router.back();
  };

  return (
    <button
      onClick={hanldeGoBack}
      type="button"
      className={classNames(
        "inline-block w-fit underline transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#7653FC] md:hover:text-[#7653FC]",
        className
      )}
      {...props}
    >
      Вернуться назад
    </button>
  );
};

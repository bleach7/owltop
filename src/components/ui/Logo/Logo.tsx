import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { ILogo } from "./Logo.interface";

export const Logo = ({ className, ...props }: ILogo) => {
  return (
    <Link
      href="/"
      className={classNames(
        "inline-block w-fit focus:outline-none focus-visible:outline-[#7653FC]",
        className
      )}
      {...props}
    >
      <Image
        src="/imgs/icons/logo.svg"
        width={158}
        height={42}
        alt="Логотип OWLtop"
        priority
        className="h-auto w-[160px]"
      />
    </Link>
  );
};

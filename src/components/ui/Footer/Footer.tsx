import classNames from "classnames";
import Link from "next/link";
import { Text } from "../Text";
import { IFooter } from "./Footer.interface";

export const Footer = ({ className, ...props }: IFooter) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={classNames(
        "bg-[#7653FC] text-center text-[14px] font-medium leading-[19px] text-white",
        className
      )}
      {...props}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-y-[20px] py-[30px] lg:flex-row">
          <Text size="sm">
            <Link
              href="/"
              className="inline-block focus:outline-none focus-visible:outline-[#DE0000] active:underline md:hover:underline"
            >
              OWLtop
            </Link>{" "}
            &copy;&nbsp;2020&nbsp;&mdash; {currentYear} Все права защищены
          </Text>
          <div className="flex flex-col items-center gap-x-[30px] gap-y-[20px] sm:flex-row xl:gap-x-[40px]">
            <Link
              href="/user-agreement"
              className="inline-block focus:outline-none focus-visible:outline-[#DE0000] active:underline md:hover:underline"
            >
              Пользовательское соглашение
            </Link>
            <Link
              href="/privacy-policy"
              className="inline-block focus:outline-none focus-visible:outline-[#DE0000] active:underline md:hover:underline"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

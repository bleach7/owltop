import { Badge, Heading } from "@/components";
import { HHStarIcon } from "@/imgs/icons";
import { formatPrice } from "@/utils";
import { IProductHH } from "./ProductHH.interface";

export const ProductHH = ({ hh, title, ...props }: IProductHH) => {
  if (!hh) {
    return null;
  }

  if (!title) {
    return null;
  }

  return (
    <section {...props}>
      <div className="flex flex-wrap justify-between gap-x-[20px] sm:items-center sm:justify-start">
        <h2 className="sr-only">Вакансии - {title}</h2>
        <Heading as="span" size="md">
          <span className="hidden sm:block">{`Вакансии - ${title}`}</span>
          <span className="flex flex-col gap-y-[5px] sm:hidden">
            <span>Вакансии</span>
            <span>{title}</span>
          </span>
        </Heading>
        <Badge
          href="https://hh.ru/"
          size="lg"
          appearance="red"
          className="mt-[4px] h-fit sm:mt-0"
        >
          hh.ru
        </Badge>
      </div>
      <ul className="mt-[25px] grid grid-cols-1 gap-[30px] text-center xl:grid-cols-[260px_1fr]">
        <li className="flex min-h-[140px] flex-col items-center rounded-[5px] bg-white py-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)]">
          <span className="text-[20px] leading-[27px]">Всего вакансий</span>
          <span className="mt-[12px] text-[36px] font-bold leading-[48px] text-[#7653FC]">
            {formatPrice(hh.count)}
          </span>
        </li>
        <ul className="grid grid-cols-1 rounded-[5px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] sm:grid-cols-2 md:grid-cols-3">
          <li className="relative flex min-h-[140px] flex-col items-center py-[20px] before:absolute before:bottom-0 before:left-[21px] before:h-px before:w-[calc(100%-42px)] before:bg-[#EBEBEB] before:content-[''] sm:bottom-auto sm:before:left-auto sm:before:right-0 sm:before:top-[21px] sm:before:h-[calc(100%-42px)] sm:before:w-px">
            <span className="text-[20px] leading-[27px]">Начальный</span>
            <span className="mt-[8px] text-[26px] font-bold leading-[35px]">
              {`${formatPrice(hh.juniorSalary)} ₽`}
            </span>
            <div className="mt-[10px] flex flex-wrap items-center gap-[10px] text-[#BBBBBB]">
              <HHStarIcon className="h-full w-[20px] text-[#FC836D]" />
              <HHStarIcon className="h-full w-[20px]" />
              <HHStarIcon className="h-full w-[20px]" />
            </div>
          </li>
          <li className="relative flex min-h-[140px] flex-col items-center py-[20px] before:absolute before:right-0 before:top-[21px] before:h-[calc(100%-42px)] before:w-px before:bg-[#EBEBEB] before:content-none md:before:content-['']">
            <span className="text-[20px] leading-[27px]">Средний</span>
            <span className="mt-[8px] text-[26px] font-bold leading-[35px]">
              {`${formatPrice(hh.middleSalary)} ₽`}
            </span>
            <div className="mt-[10px] flex flex-wrap items-center gap-[10px] text-[#BBBBBB]">
              <HHStarIcon className="h-full w-[20px] text-[#FC836D]" />
              <HHStarIcon className="h-full w-[20px] text-[#FC836D]" />
              <HHStarIcon className="h-full w-[20px]" />
            </div>
          </li>
          <li className="relative col-span-full flex min-h-[140px] flex-col items-center py-[20px] before:absolute before:left-[21px] before:top-0 before:h-px before:w-[calc(100%-42px)] before:bg-[#EBEBEB] before:content-[''] md:col-span-1 md:before:content-none">
            <span className="text-[20px] leading-[27px]">Профессионал</span>
            <span className="mt-[8px] text-[26px] font-bold leading-[35px]">
              {`${formatPrice(hh.seniorSalary)} ₽`}
            </span>
            <div className="mt-[10px] flex flex-wrap items-center gap-[10px] text-[#BBBBBB]">
              <HHStarIcon className="h-full w-[20px] text-[#FC836D]" />
              <HHStarIcon className="h-full w-[20px] text-[#FC836D]" />
              <HHStarIcon className="h-full w-[20px] text-[#FC836D]" />
            </div>
          </li>
        </ul>
      </ul>
    </section>
  );
};

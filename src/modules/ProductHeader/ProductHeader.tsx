import { Badge, Heading, SortingControllers } from "@/components";
import { IProductHeader } from "./ProductHeader.interface";

export const ProductHeader = ({
  title,
  productCount,
  className,
  ...props
}: IProductHeader) => {
  return (
    <section className={className} {...props}>
      <header className="flex flex-col items-start gap-x-[20px] gap-y-[20px] xl:flex-row xl:justify-between">
        <div className="flex w-full justify-between gap-[20px] md:w-auto md:justify-start">
          <Heading>{title}</Heading>
          {productCount > 0 && (
            <Badge appearance="gray" className="mt-[4px] h-fit">
              {productCount}
            </Badge>
          )}
        </div>
        <SortingControllers className="xl:pt-[7px]" />
      </header>
    </section>
  );
};

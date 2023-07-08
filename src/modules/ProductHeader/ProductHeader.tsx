import { Badge, Heading } from "@/components";
import { IProductHeader } from "./ProductHeader.interface";

export const ProductHeader = ({
  title,
  productCount,
  className,
  ...props
}: IProductHeader) => {
  return (
    <section className={className} {...props}>
      <header className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-[20px]">
          <Heading>{title}</Heading>
          {productCount > 0 && <Badge appearance="gray">{productCount}</Badge>}
        </div>
      </header>
    </section>
  );
};

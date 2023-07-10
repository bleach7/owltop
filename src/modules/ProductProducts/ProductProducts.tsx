import { ProductItem, Text } from "@/components";
import classNames from "classnames";
import { IProductProducts } from "./ProductProducts.interface";

export const ProductProducts = ({
  products,
  className,
  ...props
}: IProductProducts) => {
  if (!products) {
    return (
      <section className="mt-[10px]">
        <Text>К сожалению курсы отсуствуют</Text>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="mt-[10px]">
        <Text>К сожалению курсы отсуствуют</Text>
      </section>
    );
  }

  return (
    <section
      className={classNames("flex flex-col gap-y-[30px]", className)}
      {...props}
    >
      {products.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </section>
  );
};

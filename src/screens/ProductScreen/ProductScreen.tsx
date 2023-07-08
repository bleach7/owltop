import { IProductData, IProductPageData } from "@/interfaces";
import { ProductHeader, ProductSkills } from "@/modules";

export const ProductScreen = ({
  page,
  products,
}: {
  page: IProductPageData;
  products: IProductData[];
}) => {
  return (
    <>
      <ProductHeader title={page.title} productCount={products.length} />
      <ProductSkills skills={page.tags} className="mt-[30px]" />
    </>
  );
};

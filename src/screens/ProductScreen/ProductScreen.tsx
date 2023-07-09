import { IProductData, IProductPageData } from "@/interfaces";
import {
  ProductAbout,
  ProductAdvantages,
  ProductHH,
  ProductHeader,
  ProductSkills,
} from "@/modules";
import { ProductProducts } from "@/modules/ProductProducts";

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
      <ProductProducts products={products} className="mt-[20px]" />
      <ProductHH title={page.category} hh={page.hh} className="mt-[55px]" />
      <ProductAdvantages advantages={page.advantages} className="mt-[45px]" />
      <ProductAbout about={page.seoText} className="mt-[30px]" />
      <ProductSkills skills={page.tags} className="mt-[30px]" />
    </>
  );
};

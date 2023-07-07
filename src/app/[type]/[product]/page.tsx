import { Heading } from "@/components";
import { notFound } from "next/navigation";

interface IContext {
  params: IParams;
}

interface IParams {
  type: string;
  product: string;
}

const ProductPage = async ({ params }: IContext) => {
  if (!params || !params.type || !params.product) {
    notFound();
  }

  return (
    <section>
      <header>
        <Heading>Продукт</Heading>
      </header>
    </section>
  );
};

export default ProductPage;

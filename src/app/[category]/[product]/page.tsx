import { getMenu, getPage, getProducts } from "@/__api";
import { Heading } from "@/components";
import { firstLevelMenuItems } from "@/constants";
import { notFound } from "next/navigation";

interface IContext {
  params: IParams;
}

interface IParams {
  category: string;
  product: string;
}

type IPath = IParams;

export const generateStaticParams = async () => {
  let paths: IPath[] = [];

  for (const firstLevelMenuItem of firstLevelMenuItems) {
    const menu = await getMenu(firstLevelMenuItem.id);

    paths = paths.concat(
      menu.flatMap((item) =>
        item.pages.map((page) => ({
          category: firstLevelMenuItem.route,
          product: page.alias,
        }))
      )
    );
  }

  return paths;
};

const Product = async ({ params }: IContext) => {
  try {
    if (!params || !params.category || !params.product) {
      notFound();
    }

    const firstCategoryExists = firstLevelMenuItems.find(
      (item) => item.route === params.category
    );

    if (!firstCategoryExists) {
      notFound();
    }

    const page = await getPage(params.product);
    const products = await getProducts(page.category);

    if (!page.title) {
      notFound();
    }

    if (products.length === 0) {
      notFound();
    }

    return (
      <section>
        <header>
          <Heading>{page.title}</Heading>
          <p>{products.length}</p>
        </header>
      </section>
    );
  } catch (error) {
    notFound();
  }
};

export default Product;

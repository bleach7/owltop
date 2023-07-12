import { getMenu, getPage, getProducts } from "@/api";
import { firstLevelMenuItems } from "@/constants";
import { ProductScreen } from "@/screens";
import { appTitle } from "@/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface IContext {
  params: IParams;
}

interface IParams {
  category: string;
  product: string;
}

type IPath = IParams;

export const generateStaticParams = async (): Promise<IPath[]> => {
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

export const generateMetadata = async ({
  params,
}: IContext): Promise<Metadata> => {
  const page = await getPage(params.product);

  return {
    title: appTitle(page.metaTitle),
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "article",
      locale: "ru_RU",
    },
  };
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

    if (!page) {
      notFound();
    }

    if (!page.title) {
      notFound();
    }

    return <ProductScreen page={page} products={products} />;
  } catch (error) {
    notFound();
  }
};

export default Product;

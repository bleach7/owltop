import { getMenu } from "@/api";
import { firstLevelMenuItems } from "@/constants";
import { CategoryScreen } from "@/screens";
import { appTitle } from "@/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface IContext {
  params: IParams;
}

interface IParams {
  category: string;
}

type IPath = IParams;

export const generateStaticParams = (): IPath[] => {
  const paths = firstLevelMenuItems.map((firstLevelMenuItem) => {
    return {
      category: firstLevelMenuItem.route,
    };
  });

  return paths;
};

export const generateMetadata = ({ params }: IContext): Metadata => {
  if (!params.category) {
    return {
      title: appTitle(),
    };
  }

  const title = firstLevelMenuItems.find(
    (firstLevelMenuItem) => firstLevelMenuItem.route === params.category
  )?.name;

  return {
    title: appTitle(title),
  };
};

const Category = async ({ params }: IContext) => {
  try {
    const categoryId = firstLevelMenuItems.find(
      (firstLevelMenuItem) => firstLevelMenuItem.route === params.category
    )?.id;

    const title = firstLevelMenuItems.find(
      (firstLevelMenuItem) => firstLevelMenuItem.route === params.category
    )?.name;

    if (!title) {
      notFound();
    }

    const menu = await getMenu(categoryId as any);

    return (
      <CategoryScreen category={params.category} title={title} menu={menu} />
    );
  } catch (error) {
    notFound();
  }
};

export default Category;

import { Heading } from "@/components";
import { firstLevelMenuItems } from "@/constants";
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

const Category = ({ params }: IContext) => {
  try {
    const title = firstLevelMenuItems.find(
      (firstLevelMenuItem) => firstLevelMenuItem.route === params.category
    )?.name;

    if (!title) {
      notFound();
    }

    return (
      <section>
        <header>
          <Heading>{title}</Heading>
        </header>
      </section>
    );
  } catch (error) {
    notFound();
  }
};

export default Category;

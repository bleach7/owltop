import { Heading } from "@/components";
import { firstLevelMenuItems } from "@/constants";
import { appTitle } from "@/utils";
import { notFound } from "next/navigation";

interface IContext {
  params: IParams;
}

interface IParams {
  category: string;
}

export const generateStaticParams = () => {
  const paths = firstLevelMenuItems.map((firstLevelMenuItem) => {
    return {
      type: firstLevelMenuItem.route,
    };
  });

  return paths;
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
      <>
        <title>{appTitle(title)}</title>
        <section>
          <header>
            <Heading>{title}</Heading>
          </header>
        </section>
      </>
    );
  } catch (error) {
    notFound();
  }
};

export default Category;

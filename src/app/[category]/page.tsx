import { Heading } from "@/components";
import { firstLevelMenuItems } from "@/constants";
import { withAppLayout } from "@/hocs";
import { notFound } from "next/navigation";

interface IContext extends Record<string, unknown> {
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

export default withAppLayout(Category);

import { Heading } from "@/components";
import { firstLevelMenuItems } from "@/constants";
import { appTitle } from "@/utils";
import { notFound } from "next/navigation";

interface IContext {
  params: IParams;
}

interface IParams {
  type: string;
}

export const generateStaticParams = async () => {
  const paths = firstLevelMenuItems.map((firstLevelMenuItem) => {
    return {
      type: firstLevelMenuItem.route,
    };
  });

  return paths;
};

const TypeProductPage = ({ params }: IContext) => {
  const title = firstLevelMenuItems.find(
    (firstLevelMenuItem) => firstLevelMenuItem.route === params.type
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
};

export default TypeProductPage;

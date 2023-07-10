import { Heading, Text } from "@/components";
import { IMenuItemsData } from "@/interfaces";
import Link from "next/link";

export const CategoryScreen = ({
  title,
  menu,
  category,
}: {
  title: string;
  menu: IMenuItemsData;
  category: string;
}) => {
  if (menu.length === 0) {
    return (
      <section>
        <header>
          <Heading>{title}</Heading>
          <Text className="mt-[10px] inline-block">
            К сожалению продукты данной категории отсуствуют {":("}
          </Text>
        </header>
      </section>
    );
  }

  return (
    <>
      <section>
        <header>
          <Heading>{title}</Heading>
        </header>
      </section>
      <section className="mt-[30px]">
        <ul className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
          {menu.map((item) => (
            <li
              key={item._id.secondCategory}
              className="rounded-[10px] bg-white p-[30px]"
            >
              <Heading as="h2" size="sm">
                {item._id.secondCategory}
              </Heading>
              <ul className="mt-[10px] flex flex-col gap-y-[10px]">
                {item.pages.map((page) => (
                  <li key={page._id}>
                    <Link
                      href={`/${category}/${page.alias}`}
                      className="inline-block w-fit transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#7653FC] md:hover:text-[#7653FC]"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

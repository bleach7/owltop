import { Heading, Text } from "@/components";
import { AdvantageIcon } from "@/imgs/icons";
import { IProductAdvantages } from "./ProductAdvantages.interface";

export const ProductAdvantages = ({
  advantages,
  ...props
}: IProductAdvantages) => {
  if (!advantages) {
    return null;
  }

  if (advantages.length === 0) {
    return null;
  }

  return (
    <section {...props}>
      <Heading as="h2" size="md">
        Преимущества
      </Heading>
      <ul className="mt-[30px] flex flex-col gap-y-[35px]">
        {advantages.map((advantage) => {
          if (!advantage.description) {
            return (
              <li
                key={advantage._id}
                className="grid grid-cols-[35px_1fr] gap-x-[20px] md:grid-cols-[50px_1fr] md:gap-x-[40px]"
              >
                <AdvantageIcon className="h-auto w-full" />
                <Heading as="h3" size="sm" className="self-center">
                  {advantage.title}
                </Heading>
              </li>
            );
          }

          return (
            <li
              key={advantage._id}
              className="grid grid-cols-[35px_1fr] gap-x-[20px] gap-y-[10px] md:grid-cols-[50px_1fr] md:gap-x-[40px] md:gap-y-[15px]"
            >
              <AdvantageIcon className="h-auto w-full" />
              <Heading as="h3" size="sm" className="self-center">
                {advantage.title}
              </Heading>
              <span className="flex h-full w-full justify-center py-[7px]">
                <span className="inline-block h-full w-px bg-[#D2D2D2]"></span>
              </span>
              <Text size="lg">{advantage.description}</Text>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

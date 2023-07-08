import { Badge, Heading } from "@/components";
import { IProductSkills } from "./ProductSkills.interface";

export const ProductSkills = ({ skills, ...props }: IProductSkills) => {
  if (!skills) {
    return null;
  }

  if (skills.length === 0) {
    return null;
  }

  return (
    <section {...props}>
      <Heading as="h2" size="md">
        Получаемые навыки
      </Heading>
      <ul className="mt-[20px] flex flex-wrap items-center gap-[10px]">
        {skills.map((skill) => (
          <Badge size="sm" appearance="primary-outline" key={skill}>
            {skill}
          </Badge>
        ))}
      </ul>
    </section>
  );
};

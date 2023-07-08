import { ButtonGoBack, Heading } from "@/components";
import { withAppLayout } from "@/hocs";

const NotFound = () => {
  return (
    <section>
      <header>
        <Heading>Ресурс не найден :{"("}</Heading>
        <ButtonGoBack className="mt-[10px]" />
      </header>
    </section>
  );
};

export default withAppLayout(NotFound);

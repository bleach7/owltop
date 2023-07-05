import { ButtonGoBack, Heading } from "@/components";
import { appTitle } from "@/utils";

const NotFound = () => {
  return (
    <>
      <title>{appTitle("Ресурс не найден")}</title>
      <section>
        <header>
          <Heading>Ресурс не найден :{"("}</Heading>
          <ButtonGoBack className="mt-[10px]" />
        </header>
      </section>
    </>
  );
};

export default NotFound;

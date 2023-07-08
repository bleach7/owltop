import { ButtonGoBack, Heading } from "@/components";

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

export default NotFound;

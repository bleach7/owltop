import { Heading, Text } from "@/components";
import { withAppLayout } from "@/hocs";

const Home = () => {
  return (
    <section>
      <header>
        <Heading>Лучший агрегатор онлайн курсов</Heading>
        <Text className="mt-[5px]">
          Подборки лучших курсов и рейтинги, основанные на реальных отзывах.
        </Text>
      </header>
    </section>
  );
};

export default withAppLayout(Home);

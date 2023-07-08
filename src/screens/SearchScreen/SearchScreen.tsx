"use client";

import { Heading, Text } from "@/components";
import { convertToTextNormal } from "@/utils";
import { useSearchParams } from "next/navigation";

export const SearchScreen = () => {
  const searchParams = useSearchParams();

  const searchValue = searchParams.get("keyword");

  return (
    <section>
      <header>
        <Heading>
          {searchValue ? `Поиск: ${convertToTextNormal(searchValue)}` : "Поиск"}
        </Heading>
        <Text className="mt-[5px]">
          К сожалению функционал поиска ещё не реализован{" :("}
        </Text>
      </header>
    </section>
  );
};

export default SearchScreen;

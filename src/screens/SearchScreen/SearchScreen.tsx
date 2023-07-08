"use client";

import { Heading } from "@/components";
import { convertToTextNormal } from "@/utils";
import { useSearchParams } from "next/navigation";

export const SearchScreen = () => {
  const searchParams = useSearchParams();

  const searchValue = searchParams.get("keyword");

  return (
    <>
      <header>
        <Heading>
          {searchValue ? `Поиск: ${convertToTextNormal(searchValue)}` : "Поиск"}
        </Heading>
      </header>
    </>
  );
};

export default SearchScreen;

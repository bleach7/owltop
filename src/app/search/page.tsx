"use client";

import { Heading } from "@/components";
import { convertToTextNormal } from "@/utils";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();

  const searchValue = searchParams.get("keyword");

  return (
    <section>
      <header>
        <Heading>
          {searchValue ? `Поиск: ${convertToTextNormal(searchValue)}` : "Поиск"}
        </Heading>
      </header>
    </section>
  );
};

export default SearchPage;

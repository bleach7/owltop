"use client";

import { Heading } from "@/components";
import { appTitle, convertToTextNormal } from "@/utils";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();

  const searchValue = searchParams.get("keyword");

  return (
    <>
      <title>{appTitle("Поиск")}</title>
      <section>
        <header>
          <Heading>
            {searchValue
              ? `Поиск: ${convertToTextNormal(searchValue)}`
              : "Поиск"}
          </Heading>
        </header>
      </section>
    </>
  );
};

export default SearchPage;

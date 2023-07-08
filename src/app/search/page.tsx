import { Text } from "@/components";
import { SearchScreen } from "@/screens";
import { appTitle } from "@/utils";
import { Suspense } from "react";

const SearchScreenFallback = () => {
  return <Text as="span">Поиск...</Text>;
};

const SearchPage = () => {
  return (
    <>
      <title>{appTitle("Поиск")}</title>
      <section>
        <Suspense fallback={<SearchScreenFallback />}>
          <SearchScreen />
        </Suspense>
      </section>
    </>
  );
};

export default SearchPage;

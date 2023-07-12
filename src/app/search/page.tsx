import { SearchScreen } from "@/screens";
import { appTitle } from "@/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import SearchLoading from "./loading";

export const metadata: Metadata = {
  title: appTitle("Поиск"),
};

const SearchPage = () => {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchScreen />
    </Suspense>
  );
};

export default SearchPage;

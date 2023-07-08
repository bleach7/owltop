import { withAppLayout } from "@/hocs";
import { SearchScreen } from "@/screens";
import { Suspense } from "react";
import SearchLoading from "./loading";

const SearchPage = () => {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchScreen />
    </Suspense>
  );
};

export default withAppLayout(SearchPage);

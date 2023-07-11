import { IProductPageData } from "@/interfaces";

export const getPage = async (alias: string): Promise<IProductPageData> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/top-page/byAlias/${alias}`,
    {
      method: "GET",
    }
  );

  const page = await data.json();

  return page;
};

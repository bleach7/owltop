import { ETopLevelCategory, IMenuItemsData } from "@/interfaces";

export const getMenu = async (
  firstCategory: ETopLevelCategory
): Promise<IMenuItemsData> => {
  const body = {
    firstCategory: firstCategory,
  };

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/top-page/find`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const menu = await data.json();

  return menu;
};

import { IProductsData } from "@/interfaces";

export const getProducts = async (category: string): Promise<IProductsData> => {
  const body = {
    category,
    limit: 10,
  };

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/find`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const products = await data.json();

  return products;
};

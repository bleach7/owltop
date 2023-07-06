import { api } from "@/_api/axios";
import { AxiosResponse } from "axios";
import { IGetProductPageResponse } from "./getProductPage.interface";

export const getProductPage = async (
  alias: string
): Promise<AxiosResponse<IGetProductPageResponse>> => {
  const response = await api.get(`/top-page/byAlias/${alias}`);

  return response;
};

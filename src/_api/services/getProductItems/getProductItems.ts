import { api } from "@/_api/axios";
import { AxiosResponse } from "axios";
import {
  IGetProductItemsResponse,
  IGetProductItemsSubmitData,
} from "./getProductItems.interface";

export const getProductItems = async (
  data: IGetProductItemsSubmitData
): Promise<AxiosResponse<IGetProductItemsResponse>> => {
  const response = await api.post("/product/find", data);

  return response;
};

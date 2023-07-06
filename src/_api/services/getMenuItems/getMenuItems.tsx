import { api } from "@/_api/axios";
import { AxiosResponse } from "axios";
import {
  IGetMenuItemsResponse,
  IGetMenuItemsSubmitData,
} from "./getMenuItems.interface";

export const getMenuItems = async (
  data: IGetMenuItemsSubmitData
): Promise<AxiosResponse<IGetMenuItemsResponse>> => {
  const response = await api.post("/top-page/find", data);

  return response;
};

import { ETopLevelCategory } from "./ui.interface";

export type IMenuItemsData = IMenuItemData[];

export type IAllMenu = IAllMenuItem[];

export interface IAllMenuItem {
  id: ETopLevelCategory;
  menuItems: IMenuItemsData;
}

export interface IMenuItemData {
  _id: IMenuItemIDData;
  pages: IMenuItemPageData[];
}

export interface IMenuItemIDData {
  secondCategory: string;
}

export interface IMenuItemPageData {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

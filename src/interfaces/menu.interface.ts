export type IMenuItemsData = IMenuItemData[];

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

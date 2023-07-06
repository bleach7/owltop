export interface IGetMenuItemsSubmitData {
  firstCategory: number;
}

export type IGetMenuItemsResponse = IMenuItemData[];

export interface IMenuItemData {
  _id: IIDData;
  pages: IMenuItemPageData[];
  isOpened?: boolean;
}

export interface IIDData {
  secondCategory: string;
}

export interface IMenuItemPageData {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

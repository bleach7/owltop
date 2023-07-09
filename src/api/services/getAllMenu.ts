import { firstLevelMenuItems } from "@/constants";
import { IAllMenu, IAllMenuItem } from "@/interfaces";
import { getMenu } from "./getMenu";

export const getAllMenu = async (): Promise<IAllMenu> => {
  let allMenu: IAllMenu = [];

  for (const menuItem of firstLevelMenuItems) {
    const secondLevelMenuItem = await getMenu(menuItem.id);

    const allMenuItem: IAllMenuItem = {
      id: menuItem.id,
      menuItems: secondLevelMenuItem,
    };

    allMenu = [...allMenu, allMenuItem];
  }

  return allMenu;
};

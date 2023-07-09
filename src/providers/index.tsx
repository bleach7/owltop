import { ProgressBar } from "@/components";
import { IAllMenu } from "@/interfaces";
import { AppLayout } from "@/layouts";
import { AppStoreProvider } from "@/store";
import { ReactNode } from "react";

export const Providers = ({
  children,
  allMenu,
}: {
  children: ReactNode;
  allMenu: IAllMenu;
}) => {
  return (
    <AppStoreProvider>
      <AppLayout allMenu={allMenu}>
        <ProgressBar />
        {children}
      </AppLayout>
    </AppStoreProvider>
  );
};

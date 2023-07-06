import { AppLayout } from "@/layouts";
import { AppStoreProvider } from "@/store";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AppStoreProvider>
      <AppLayout>{children}</AppLayout>
    </AppStoreProvider>
  );
};

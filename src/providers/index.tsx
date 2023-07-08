import { ProgressBar } from "@/components";
import { AppLayout } from "@/layouts";
import { AppStoreProvider } from "@/store";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AppStoreProvider>
      <ProgressBar />
      <AppLayout>{children}</AppLayout>
    </AppStoreProvider>
  );
};

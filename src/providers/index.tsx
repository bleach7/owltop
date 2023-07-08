import { ProgressBar } from "@/components";
import { AppStoreProvider } from "@/store";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AppStoreProvider>
      <ProgressBar />
      {children}
    </AppStoreProvider>
  );
};

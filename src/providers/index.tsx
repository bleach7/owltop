import { AppLayout } from "@/layouts";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <AppLayout>{children}</AppLayout>;
};

import {
  ButtonScrollToTop,
  Footer,
  Header,
  MobileSidebar,
  Sidebar,
  SkipLink,
} from "@/components";
import { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SkipLink />
      <div className="flex min-h-full flex-col overflow-hidden">
        <Header className="lg:hidden" />
        <div className="container flex-auto">
          <div className="pb-[100px] lg:grid lg:grid-cols-[250px_1fr] lg:gap-x-[30px] lg:pt-[35px]">
            <Sidebar className="hidden lg:block" />
            <MobileSidebar className="lg:hidden" />
            <main id="main">{children}</main>
          </div>
        </div>
        <Footer />
      </div>
      <ButtonScrollToTop />
    </>
  );
};

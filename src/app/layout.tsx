import { Footer, Header, Sidebar, SkipLink } from "@/components";
import { appTitle } from "@/utils";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import "@fontsource/noto-sans/700.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: appTitle(),
  description:
    "Подборки лучших курсов и рейтинги, основанные на реальных отзывах",
  themeColor: "#7653FC",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ru" className="h-full scroll-smooth">
      <body className="rendering-speed h-full bg-[#F5F6F8] font-noto-sans text-[16px] font-normal leading-[21px] text-[#3B434E] antialiased">
        <SkipLink />
        <div className="flex min-h-full flex-col overflow-hidden">
          <Header className="lg:hidden" />
          <div className="container flex-auto">
            <div className="pb-[100px] lg:grid lg:grid-cols-[250px_1fr] lg:gap-x-[30px] lg:pt-[35px]">
              <Sidebar className="hidden lg:block" />
              <main id="main">{children}</main>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

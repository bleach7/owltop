import { getAllMenu } from "@/api";
import { Providers } from "@/providers";
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

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const allMenu = await getAllMenu();

  return (
    <html lang="ru" className="h-full scroll-smooth">
      <body className="rendering-speed h-full bg-[#F5F6F8] font-noto-sans text-[16px] font-normal leading-[21px] text-[#3B434E] antialiased">
        <Providers allMenu={allMenu}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;

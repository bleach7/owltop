import { IChildren } from "@/interfaces";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import "@fontsource/noto-sans/700.css";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OWLtop",
  description:
    "Подборки лучших курсов и рейтинги, основанные на реальных отзывах",
  themeColor: "#7653FC",
};

const RootLayout = ({ children }: IChildren) => {
  return (
    <html lang="ru" className="h-full scroll-smooth">
      <body className="rendering-speed font-noto-sans h-full bg-[#F5F6F8] text-[16px] font-normal leading-[21px] text-[#3B434E] antialiased">
        <div className="flex min-h-full flex-col overflow-hidden">
          <header className="lg:hidden">
            <div className="container">
              <div>Header</div>
            </div>
          </header>
          <div className="container flex-auto">
            <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-x-[30px]">
              <aside className="hidden lg:block">Sidebar</aside>
              <main>{children}</main>
            </div>
          </div>
          <footer>
            <div className="container">
              <div>Footer</div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

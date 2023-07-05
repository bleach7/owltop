import { Metadata } from "next";
import "./globals.css";
import { IChildren } from "@/interfaces";

export const metadata: Metadata = {
  title: "OWLtop",
  description:
    "Подборки лучших курсов и рейтинги, основанные на реальных отзывах",
  themeColor: "#7653FC",
};

const RootLayout = ({ children }: IChildren) => {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

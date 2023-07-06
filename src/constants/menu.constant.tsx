import { ETopLevelCategory } from "@/interfaces";
import {
  BooksIcon,
  CoursesIcon,
  ProductsIcon,
  ServicesIcon,
} from "../../public/imgs/icons";

export const firstLevelMenuItems = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon className="h-auto w-full" />,
    id: ETopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon className="h-auto w-full" />,
    id: ETopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon className="h-auto w-full" />,
    id: ETopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <ProductsIcon className="h-auto w-full" />,
    id: ETopLevelCategory.Products,
  },
];

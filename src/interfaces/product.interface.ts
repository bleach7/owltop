import { ETopLevelCategory } from "./ui.interface";

export interface IProductPageData {
  _id: string;
  tags: string[];
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: ETopLevelCategory;
  advantages: IProductPageAdvantageData[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  hh: IProductPageHHData;
  qas: unknown[];
  addresses: unknown[];
  categoryOn: string;
  blog: IProductPageBlogData;
  sravnikus: IProductPageSravnikusData;
  learningclub: IProductPageLearningclubData;
}

export interface IProductPageAdvantageData {
  title: string;
  description: string;
  _id: string;
}

export interface IProductPageHHData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: string;
  _id: string;
}

export interface IProductPageBlogData {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

export interface IProductPageSravnikusData {
  metaTitle: string;
  metaDescription: string;
  qas: unknown[];
  _id: string;
}

export interface IProductPageLearningclubData {
  metaTitle: string;
  metaDescription: string;
  qas: unknown[];
  _id: string;
}

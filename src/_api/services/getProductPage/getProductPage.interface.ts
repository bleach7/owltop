import { ETopLevelCategory } from "@/interfaces";

export interface IGetProductPageResponse {
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
  advantages: IAdvantageData[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  hh: IHHData;
  qas: any[];
  addresses: any[];
  categoryOn: string;
  blog: IBlogData;
  sravnikus: ISravnikusData;
  learningclub: ILearningClubData;
}

export interface IAdvantageData {
  title: string;
  description: string;
  _id: string;
}

export interface IHHData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: string;
  _id: string;
}

export interface IBlogData {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

export interface ISravnikusData {
  metaTitle: string;
  metaDescription: string;
  qas: any[];
  _id: string;
}

export interface ILearningClubData {
  metaTitle: string;
  metaDescription: string;
  qas: any[];
  _id: string;
}

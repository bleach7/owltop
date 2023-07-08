export type IProductsData = IProductData[];

export interface IProductData {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  image: string;
  description: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  characteristics: IProductCharacteristicData[];
  advantages?: string;
  initialRating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  html: string;
  blog: IProductBlogData;
  companyId: string;
  clicks: number;
  reviews: IProductReviewData[];
  reviewCount: number;
  reviewAvg?: number;
}

export interface IProductCharacteristicData {
  name: string;
  value: string;
}

export interface IProductBlogData {
  text: string;
  _id: string;
  bigImage?: string;
}

export interface IProductReviewData {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  productId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

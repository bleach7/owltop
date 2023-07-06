export interface IGetProductItemsSubmitData {
  category: string;
  limit: number;
}

export type IGetProductItemsResponse = IProductData[];

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
  characteristics: ICharacteristicData[];
  advantages?: string;
  initialRating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  html: string;
  blog: IBlogPreviewData;
  companyId: string;
  clicks: number;
  reviews: IReviewData[];
  reviewCount: number;
  reviewAvg?: number;
}

export interface ICharacteristicData {
  name: string;
  value: string;
}

export interface IBlogPreviewData {
  text: string;
  _id: string;
  bigImage?: string;
}

export interface IReviewData {
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

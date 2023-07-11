import { IDivElement, IProductReviewData } from "@/interfaces";

export interface IProductItemFooter extends IDivElement {
  reviews: IProductReviewData[];
  formRef: any;
}

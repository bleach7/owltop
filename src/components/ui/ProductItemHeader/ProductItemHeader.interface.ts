import { IDivElement, IProductData } from "@/interfaces";

export interface IProductItemHeader extends IDivElement {
  product: IProductData;
  scrollToReview: () => void;
}

import { IFormElement } from "@/interfaces";

export interface IReviewForm extends IFormElement {
  formRef: any;
}

export interface IReviewFormFields {
  name: string;
  title: string;
  description: string;
  rating: number;
}

import { IUListElement } from "@/interfaces";
import { FieldError } from "react-hook-form";

export interface IRating extends IUListElement {
  rating: number;
  setRating?: (value?: any) => void;
  isEditable?: boolean;
  error?: FieldError;
}

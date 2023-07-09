import { IUListElement } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";

export interface IRating extends IUListElement {
  rating: number;
  setRating?: Dispatch<SetStateAction<number>>;
  isEditable?: boolean;
}

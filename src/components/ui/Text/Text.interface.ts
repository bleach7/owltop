import { IParagraphElement } from "@/interfaces";
import { ReactNode } from "react";

export interface IText extends IParagraphElement {
  as?: "p" | "span";
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

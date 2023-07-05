import { IHeadingElement } from "@/interfaces";
import { ReactNode } from "react";

export interface IHeading extends IHeadingElement {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

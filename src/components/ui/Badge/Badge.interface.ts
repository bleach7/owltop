import { ISpanElement } from "@/interfaces";
import { ReactNode } from "react";

export interface IBadge extends ISpanElement {
  children: ReactNode;
  size?: "sm" | "lg";
  href?: string;
  appearance?:
    | "gray"
    | "gray-outline"
    | "red"
    | "green"
    | "primary"
    | "primary-outline";
}

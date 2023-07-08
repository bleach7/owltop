import { ISpanElement } from "@/interfaces";
import { ReactNode } from "react";

export interface IBadge extends ISpanElement {
  href?: string;
  children: ReactNode;
  size?: "sm" | "lg";
  appearance?:
    | "gray"
    | "gray-outline"
    | "red"
    | "green"
    | "primary"
    | "primary-outline";
}

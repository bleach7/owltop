import { IButtonElement } from "@/interfaces";
import { ReactNode } from "react";

export interface IButton
  extends Omit<
    IButtonElement,
    "onAnimationStart" | "onDragStart" | "onDragEnd" | "ref" | "onDrag"
  > {
  children: ReactNode;
  arrow?: "none" | "right" | "down";
  appearance?: "primary" | "secondary";
}

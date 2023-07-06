import { IButtonElement } from "@/interfaces";

export interface IMenuToggler
  extends Omit<
    IButtonElement,
    "onAnimationStart" | "onDragStart" | "onDragEnd" | "ref" | "onDrag"
  > {
  isOpen?: boolean;
}

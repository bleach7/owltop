import { ReactNode } from "react";

export interface IButtonLink {
  children: ReactNode;
  arrow?: "none" | "right" | "down";
  appearance?: "primary" | "secondary";
  className?: string;
  href: string;
}

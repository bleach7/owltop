import { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
} from "react";

export type IDivElement = HTMLAttributes<HTMLDivElement>;

export type IParagraphElement = HTMLAttributes<HTMLParagraphElement>;

export type IHeadingElement = HTMLAttributes<HTMLHeadingElement>;

export type IButtonElement = ButtonHTMLAttributes<HTMLButtonElement>;

export type IAnchorElement = AnchorHTMLAttributes<HTMLAnchorElement>;

export interface ILinkElement
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    Omit<LinkProps, "href"> {}

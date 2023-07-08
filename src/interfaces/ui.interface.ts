import { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  SVGAttributes,
} from "react";

export type ISpanElement = HTMLAttributes<HTMLSpanElement>;

export type IInputElement = InputHTMLAttributes<HTMLInputElement>;

export type IFormElement = FormHTMLAttributes<HTMLFormElement>;

export type ISVGElement = SVGAttributes<SVGSVGElement>;

export type IDivElement = HTMLAttributes<HTMLDivElement>;

export type IParagraphElement = HTMLAttributes<HTMLParagraphElement>;

export type IHeadingElement = HTMLAttributes<HTMLHeadingElement>;

export type IButtonElement = ButtonHTMLAttributes<HTMLButtonElement>;

export type IAnchorElement = AnchorHTMLAttributes<HTMLAnchorElement>;

export interface ILinkElement
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    Omit<LinkProps, "href"> {}

export enum ETopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

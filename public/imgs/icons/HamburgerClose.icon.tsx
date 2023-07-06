import { ISVGElement } from "@/interfaces";

export const HamburgerCloseIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      fill="none"
      viewBox="0 0 19 19"
      {...props}
    >
      <rect
        width="23"
        height="3"
        y="16.51"
        fill="currentColor"
        rx="1.5"
        transform="rotate(-45 0 16.51)"
      ></rect>
      <rect
        width="23"
        height="3"
        x="2.253"
        fill="currentColor"
        rx="1.5"
        transform="rotate(45 2.253 0)"
      ></rect>
    </svg>
  );
};

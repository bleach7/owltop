import { ISVGElement } from "@/interfaces";

export const SearchResetIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth="3"
        d="M2.061 1.939L10.546 10.425"
      ></path>
      <path
        stroke="currentColor"
        strokeWidth="3"
        d="M1.939 10.425L10.425 1.939"
      ></path>
    </svg>
  );
};

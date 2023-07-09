import { ISVGElement } from "@/interfaces";

export const SortIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="13"
      fill="none"
      viewBox="0 0 20 13"
      {...props}
    >
      <rect width="20" height="3" fill="currentColor" rx="1.5"></rect>
      <rect width="14" height="3" y="5" fill="currentColor" rx="1.5"></rect>
      <rect width="8" height="3" y="10" fill="currentColor" rx="1.5"></rect>
    </svg>
  );
};

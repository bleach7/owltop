import { ISVGElement } from "@/interfaces";

export const HamburgerOpenIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="17"
      fill="none"
      viewBox="0 0 20 17"
      {...props}
    >
      <rect width="20" height="3" fill="currentColor" rx="1.5"></rect>
      <rect width="20" height="3" y="7" fill="currentColor" rx="1.5"></rect>
      <rect width="20" height="3" y="14" fill="currentColor" rx="1.5"></rect>
    </svg>
  );
};

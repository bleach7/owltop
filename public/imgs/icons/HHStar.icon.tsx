import { ISVGElement } from "@/interfaces";

export const HHStarIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <circle cx="10" cy="10" r="10" fill="currentColor"></circle>
      <path
        fill="#fff"
        d="M15.969 8.534a.643.643 0 00-.549-.457l-3.464-.328-1.369-3.345A.638.638 0 0010 4a.636.636 0 00-.586.404L8.044 7.75l-3.464.328a.645.645 0 00-.549.457.685.685 0 00.186.708l2.619 2.396-.772 3.548a.68.68 0 00.248.687.617.617 0 00.701.033L10 14.042l2.986 1.864c.22.136.495.124.702-.033a.68.68 0 00.248-.687l-.772-3.548 2.619-2.396a.685.685 0 00.186-.708z"
      ></path>
    </svg>
  );
};

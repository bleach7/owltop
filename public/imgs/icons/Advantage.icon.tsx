import { ISVGElement } from "@/interfaces";

export const AdvantageIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 50 50"
      {...props}
    >
      <circle cx="25" cy="25" r="25" fill="#C8F8E4"></circle>
      <g clipPath="url(#clip0_77_0)">
        <path
          fill="#1DC37E"
          d="M36.297 20.368l-12.661 12.66a2.402 2.402 0 01-3.397 0l-6.536-6.536a2.402 2.402 0 013.397-3.397l4.838 4.838L32.9 16.971a2.402 2.402 0 013.397 3.397z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_77_0">
          <path
            fill="#fff"
            d="M0 0H24V24H0z"
            transform="translate(13 13)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

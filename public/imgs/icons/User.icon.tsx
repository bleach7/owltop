import { ISVGElement } from "@/interfaces";

export const UserIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_1_269)">
        <path d="M15 0C6.729 0 0 6.729 0 15s6.729 15 15 15 15-6.729 15-15S23.271 0 15 0zm0 27.625C8.038 27.625 2.375 21.961 2.375 15S8.038 2.375 15 2.375c6.961 0 12.625 5.664 12.625 12.625 0 6.962-5.664 12.625-12.625 12.625z"></path>
        <path d="M15 17.662c-4.219 0-8.166 2.115-11.113 5.956l1.883 1.445c2.489-3.241 5.767-5.027 9.23-5.027s6.741 1.786 9.23 5.027l1.883-1.445C23.165 19.777 19.22 17.662 15 17.662z"></path>
        <path d="M15 5.383c-3.405 0-6.174 2.787-6.174 6.213 0 3.427 2.77 6.214 6.174 6.214 3.404 0 6.174-2.787 6.174-6.214 0-3.426-2.77-6.213-6.174-6.213zm0 10.052c-2.095 0-3.8-1.722-3.8-3.839s1.705-3.839 3.8-3.839c2.095 0 3.8 1.723 3.8 3.84 0 2.116-1.705 3.838-3.8 3.838z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1_269">
          <path fill="currentColor" d="M0 0H30V30H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
import type { SVGProps } from 'react';

const SvgKakao = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M12.5 4c-4.71 0-9 3.786-9 6.989 0 2.4 1.558 4.517 3.931 5.775l-.998 3.666c-.089.325.28.583.563.396l4.377-2.905a12 12 0 0 0 1.127.057c4.97 0 9-3.129 9-6.989C21.5 7.786 17.47 4 12.5 4"
      clipRule="evenodd"
      opacity={0.902}
    />
  </svg>
);
export default SvgKakao;

import type { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 21"
    {...props}
  >
    <path
      fill="#444950"
      fillRule="evenodd"
      d="M15.525 4.029a.667.667 0 0 1 .943.943l-5.527 5.527 5.53 5.53a.667.667 0 1 1-.942.944l-5.53-5.531-5.53 5.53a.667.667 0 1 1-.944-.942l5.53-5.53L3.53 4.971a.667.667 0 1 1 .942-.943l5.527 5.527z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClose;

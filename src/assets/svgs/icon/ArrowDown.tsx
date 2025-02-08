import type { SVGProps } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#444950"
      fillRule="evenodd"
      d="M19.734 8.405a.8.8 0 0 1 .06 1.13l-7.2 8a.8.8 0 0 1-1.189 0l-7.2-8a.8.8 0 0 1 1.19-1.07L12 15.804l6.605-7.34a.8.8 0 0 1 1.13-.059"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDown;

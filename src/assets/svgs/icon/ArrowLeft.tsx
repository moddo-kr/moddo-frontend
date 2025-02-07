import type { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#444950"
      fillRule="evenodd"
      d="M15.594 19.735a.8.8 0 0 1-1.13.06l-8-7.2a.8.8 0 0 1 0-1.19l8-7.2a.8.8 0 0 1 1.071 1.19L8.195 12l7.34 6.605a.8.8 0 0 1 .06 1.13"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeft;

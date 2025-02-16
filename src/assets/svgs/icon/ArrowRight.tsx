import type { SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#444950"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.405 19.735a.8.8 0 0 0 1.13.06l8-7.2a.8.8 0 0 0 0-1.19l-8-7.2a.8.8 0 1 0-1.07 1.19L15.805 12l-7.34 6.605a.8.8 0 0 0-.06 1.13"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRight;

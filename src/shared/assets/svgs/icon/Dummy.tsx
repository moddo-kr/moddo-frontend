import type { SVGProps } from 'react';

const SvgDummy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#444950"
      fillRule="evenodd"
      d="M4.8 3A1.8 1.8 0 0 0 3 4.8v14.4A1.8 1.8 0 0 0 4.8 21h14.4a1.8 1.8 0 0 0 1.8-1.8V4.8A1.8 1.8 0 0 0 19.2 3zm-.2 1.8c0-.11.09-.2.2-.2h13.468L4.6 18.268zm1.13 14.6H19.2a.2.2 0 0 0 .2-.2V5.73z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDummy;

import type { SVGProps } from 'react';

const SvgConfirm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 14"
    {...props}
  >
    <path
      stroke="#444950"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M18.5 1 6.813 13 1.5 7.545"
    />
  </svg>
);
export default SvgConfirm;

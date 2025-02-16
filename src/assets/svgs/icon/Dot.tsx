import type { SVGProps } from 'react';

const SvgDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 10"
    {...props}
  >
    <circle cx={5} cy={5} r={5} fill="#FF802E" />
  </svg>
);
export default SvgDot;

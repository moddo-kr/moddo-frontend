import type { SVGProps } from 'react';
const SvgDefaultPicker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 6"
    {...props}
  >
    <rect width={6} height={6} fill="#D2D4D5" rx={3} />
  </svg>
);
export default SvgDefaultPicker;

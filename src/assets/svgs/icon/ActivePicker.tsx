import type { SVGProps } from 'react';
const SvgActivePicker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 6"
    {...props}
  >
    <rect width={12} height={6} fill="#6F7379" rx={3} />
  </svg>
);
export default SvgActivePicker;

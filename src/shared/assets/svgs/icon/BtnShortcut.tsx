import type { SVGProps } from 'react';

const SvgBtnShortcut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="#444950"
      fillRule="evenodd"
      d="M2.667 12a.8.8 0 0 0 .245.577l5.2 5a.8.8 0 1 0 1.11-1.154L5.452 12.8h16.413a.8.8 0 0 0 0-1.6H5.453l3.768-3.623a.8.8 0 0 0-1.109-1.154l-5.2 5a.8.8 0 0 0-.245.577"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBtnShortcut;

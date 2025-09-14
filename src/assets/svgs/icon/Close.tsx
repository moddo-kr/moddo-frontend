import type { SVGProps } from 'react';

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#444950"
      fillRule="evenodd"
      d="M18.63 4.235a.8.8 0 0 1 1.132 1.131L13.129 12l6.637 6.637a.8.8 0 1 1-1.132 1.131l-6.636-6.637-6.636 6.637a.8.8 0 1 1-1.132-1.131l6.637-6.637-6.633-6.633a.8.8 0 1 1 1.132-1.131l6.632 6.633z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClose;

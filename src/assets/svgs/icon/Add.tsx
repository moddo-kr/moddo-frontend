import type { SVGProps } from 'react';

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    viewBox="0 0 30 30"
    {...props}
  >
    <path d="M0 15c0 8.284 6.716 15 15 15s15-6.716 15-15S23.284 0 15 0 0 6.716 0 15" />
    <path
      fill="#FF9958"
      fillRule="evenodd"
      d="M13.8 8.635a1.2 1.2 0 0 1 2.4 0v5.166h5.163a1.2 1.2 0 1 1 0 2.4h-5.162v5.162a1.2 1.2 0 0 1-2.4 0v-5.162H8.635a1.2 1.2 0 0 1 0-2.4h5.166z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAdd;

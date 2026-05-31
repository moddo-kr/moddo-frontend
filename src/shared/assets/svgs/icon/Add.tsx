import type { SVGProps } from 'react';

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 15c0 8.284 6.716 15 15 15s15-6.716 15-15S23.284 0 15 0 0 6.716 0 15m15-7.565a1.2 1.2 0 0 0-1.2 1.2v5.166H8.636a1.2 1.2 0 1 0 0 2.4h5.166v5.162a1.2 1.2 0 0 0 2.4 0v-5.162h5.162a1.2 1.2 0 0 0 0-2.4h-5.162V8.635a1.2 1.2 0 0 0-1.2-1.2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAdd;

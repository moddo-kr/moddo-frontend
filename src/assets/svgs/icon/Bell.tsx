import type { SVGProps } from 'react';

const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 20"
    {...props}
    fill="none"
  >
    <g stroke="#000" strokeLinecap="round" strokeWidth={1.5}>
      <path
        strokeLinejoin="round"
        d="M15.934 12.98a3 3 0 0 1-.457-1.59V7.226a6.477 6.477 0 0 0-12.954 0v4.162a3 3 0 0 1-.457 1.592L.978 14.72a1 1 0 0 0 .848 1.53h14.348a1 1 0 0 0 .848-1.53z"
      />
      <path d="M7 19.25h4" />
    </g>
  </svg>
);
export default SvgBell;

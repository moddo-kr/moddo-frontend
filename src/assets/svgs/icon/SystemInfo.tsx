import type { SVGProps } from 'react';

const SvgSystemInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <rect
      width={20}
      height={20}
      fill="#2391F6"
      rx={10}
      transform="matrix(1 0 0 -1 0 20)"
    />
    <g fill="#fff">
      <path d="M9.9 7.441a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4M8.4 8.431a.2.2 0 0 0-.2.2v.8c0 .11.089.2.2.2h.7c.111 0 .2.09.2.2v3.763H8.2a.2.2 0 0 0-.2.2v.8c0 .11.09.2.2.2h3.6a.2.2 0 0 0 .2-.2v-.8a.2.2 0 0 0-.2-.2h-.7V8.63a.2.2 0 0 0-.2-.2z" />
    </g>
  </svg>
);
export default SvgSystemInfo;

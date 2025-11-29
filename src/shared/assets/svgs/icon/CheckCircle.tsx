import type { SVGProps } from 'react';

const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path d="M0 10c0 5.523 4.477 10 10 10s10-4.477 10-10S15.523 0 10 0 0 4.477 0 10" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M13.753 6.34a.8.8 0 0 1 .21 1.111l-4.1 6a.8.8 0 0 1-1.227.115l-2.501-2.5a.8.8 0 0 1 1.13-1.132l1.82 1.819 3.556-5.204a.8.8 0 0 1 1.112-.21"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckCircle;

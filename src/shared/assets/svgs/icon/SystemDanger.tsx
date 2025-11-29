import type { SVGProps } from 'react';

const SvgSystemDanger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#EA605C"
      d="M0 10c0 5.523 4.477 10 10 10s10-4.477 10-10S15.523 0 10 0 0 4.477 0 10"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M7.565 6.435a.8.8 0 1 0-1.131 1.13l2.435 2.436-2.434 2.434a.8.8 0 0 0 1.131 1.13L10 11.133l2.434 2.434a.8.8 0 0 0 1.13-1.132l-2.433-2.433 2.435-2.435a.8.8 0 0 0-1.13-1.131L10 8.87z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSystemDanger;

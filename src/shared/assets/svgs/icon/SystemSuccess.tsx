import type { SVGProps } from 'react';

const SvgSystemSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <rect
      width={19.2}
      height={19.2}
      fill="#4EC07C"
      rx={9.6}
      transform="matrix(1 0 0 -1 .8 19.6)"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M14.003 6.486c.35.239.44.717.2 1.067l-3.935 5.76a.768.768 0 0 1-1.177.11l-2.402-2.4a.768.768 0 1 1 1.086-1.086l1.747 1.745 3.413-4.995a.77.77 0 0 1 1.068-.201"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSystemSuccess;

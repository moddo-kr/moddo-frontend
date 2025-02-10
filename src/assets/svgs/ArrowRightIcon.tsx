import type { SVGProps } from 'react';

function SvgArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M7.004 16.446a.667.667 0 0 0 .942.05l6.667-6a.667.667 0 0 0 0-.991l-6.667-6a.667.667 0 1 0-.892.99L13.17 10l-6.116 5.505a.667.667 0 0 0-.05.941"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default SvgArrowRightIcon;

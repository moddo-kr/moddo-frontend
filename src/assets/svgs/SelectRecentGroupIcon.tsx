import type { SVGProps } from 'react';

function SvgSelectRecentGroupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 44 44"
      {...props}
    >
      <circle cx={22} cy={22} r={22} fill="#CECFD3" />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="m16 22 3.995 4L28 18"
      />
    </svg>
  );
}
export default SvgSelectRecentGroupIcon;

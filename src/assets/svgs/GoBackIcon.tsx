import type { SVGProps } from 'react';

function SvgGoBackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 18"
      {...props}
    >
      <path
        stroke="#4C5B71"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 1 1 9l8 8"
      />
    </svg>
  );
}
export default SvgGoBackIcon;

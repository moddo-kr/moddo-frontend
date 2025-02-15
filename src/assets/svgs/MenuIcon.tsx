import type { SVGProps } from 'react';

function SvgMenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#444950"
        fillRule="evenodd"
        d="M2.2 6a.8.8 0 0 1 .8-.8h18a.8.8 0 0 1 0 1.6H3a.8.8 0 0 1-.8-.8m0 6a.8.8 0 0 1 .8-.8h18a.8.8 0 0 1 0 1.6H3a.8.8 0 0 1-.8-.8m.8 5.2a.8.8 0 0 0 0 1.6h18a.8.8 0 0 0 0-1.6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default SvgMenuIcon;

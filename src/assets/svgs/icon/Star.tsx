import type { SVGProps } from 'react';

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      // fill="#D2D4D5"
      d="m9 12.953 3.113 1.882a.748.748 0 0 0 1.117-.81l-.825-3.54L15.158 8.1c.502-.435.232-1.26-.428-1.312l-3.623-.308L9.69 3.135c-.255-.607-1.125-.607-1.38 0L6.892 6.473 3.27 6.78c-.66.053-.93.878-.428 1.313l2.753 2.385-.825 3.54a.748.748 0 0 0 1.117.81z"
    />
  </svg>
);
export default SvgStar;

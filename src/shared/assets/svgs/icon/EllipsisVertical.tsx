import type { SVGProps } from 'react';

const SvgEllipsisVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.002 4a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8M12.002 10.602a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8M13.402 18.6a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0"
    />
  </svg>
);
export default SvgEllipsisVertical;

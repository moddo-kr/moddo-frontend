import type { SVGProps } from 'react';

const SvgReset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#444950"
      fillRule="evenodd"
      d="M4.198 12c0-4.304 3.51-7.8 7.848-7.8a7.85 7.85 0 0 1 6.856 4H15.8a.8.8 0 0 0 0 1.6h5a.8.8 0 0 0 .8-.8V4A.8.8 0 0 0 20 4v2.925A9.45 9.45 0 0 0 12.046 2.6c-5.214 0-9.448 4.204-9.448 9.4s4.234 9.4 9.448 9.4c4.734 0 8.658-3.464 9.343-7.99a.8.8 0 0 0-1.582-.24c-.567 3.75-3.824 6.63-7.761 6.63-4.339 0-7.848-3.496-7.848-7.8"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReset;

import type { SVGProps } from 'react';
const SvgDeleteButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#EA605C"
      d="M.667 9a8.333 8.333 0 0 0 16.667 0A8.333 8.333 0 0 0 .667 9"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.971 6.029a.667.667 0 1 0-.943.943L8.058 9l-2.029 2.028a.667.667 0 1 0 .943.943L9 9.943l2.028 2.029a.667.667 0 0 0 .943-.943L9.943 9l2.029-2.03a.667.667 0 0 0-.943-.942L9 8.058z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDeleteButtonIcon;

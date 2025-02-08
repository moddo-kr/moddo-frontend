import type { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#444950"
      fillRule="evenodd"
      d="M7.8 2a.8.8 0 0 1 .8.8V5h6.798V2.8a.8.8 0 0 1 1.6 0V5H19.2A1.8 1.8 0 0 1 21 6.8v12.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 19.2V6.8A1.8 1.8 0 0 1 4.8 5H7V2.8a.8.8 0 0 1 .8-.8m-3 4.6a.2.2 0 0 0-.2.2v2.4h14.8V6.8a.2.2 0 0 0-.2-.2zm-.2 12.6v-8.4h14.8v8.4a.2.2 0 0 1-.2.2H4.8a.2.2 0 0 1-.2-.2M7.602 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.402 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendar;

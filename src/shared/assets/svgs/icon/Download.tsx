import type { SVGProps } from 'react';

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#444950"
      fillRule="evenodd"
      d="M12.576 16.054a.8.8 0 0 1-1.154 0l-5-5.2a.8.8 0 1 1 1.154-1.109l3.623 3.769V3.8a.8.8 0 1 1 1.6 0v9.714l3.623-3.769a.8.8 0 1 1 1.154 1.11zM3.6 16A.8.8 0 0 0 2 16v3.2a.8.8 0 0 0 .8.8h18.399a.8.8 0 0 0 .8-.8V16a.8.8 0 0 0-1.6 0v2.4h-16.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDownload;

import type { SVGProps } from 'react';

const SvgSystemWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 19"
    {...props}
  >
    <path
      fill="#FAE03E"
      d="M10.17.494a.944.944 0 0 1 1.66 0l9.54 17.026c.369.657-.092 1.48-.83 1.48H1.46c-.738 0-1.199-.823-.83-1.48z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M10.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zm0 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSystemWarning;

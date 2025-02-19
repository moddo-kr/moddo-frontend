import styled from "styled-components";

export const Divider = styled.div<{height: number}>`
  width: 100dvw;
  max-width: 37.5rem;
  background: #E8E8E7;
  height: ${({theme, height}) => theme.unit[height]};
`;

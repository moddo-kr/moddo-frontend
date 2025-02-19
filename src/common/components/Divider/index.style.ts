import styled from 'styled-components';

export const Divider = styled.div<{ height: number }>`
  width: 100dvw;
  max-width: 37.5rem;
  background: #e8e8e7;
  height: ${({ theme, height }) => theme.unit[height]};
`;

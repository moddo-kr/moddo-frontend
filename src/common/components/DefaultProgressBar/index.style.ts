import styled from "styled-components";

export const Trail = styled.div`
  width: 100%;
  height: ${({theme}) => theme.unit[8]};
  background: ${({theme})=> theme.color.semantic.background.normal.default};
`;

export const Path = styled.div<{percentage: number}>`
  width: ${({percentage}) => `${percentage}%`};
  height: 100%;
  background: ${({theme}) => theme.color.semantic.orange.default};
`;
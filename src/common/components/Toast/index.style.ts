import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  height: ${({ theme }) => theme.unit[40]};
  padding: ${({ theme }) =>
    `${theme.unit[16]} ${theme.unit[14]} ${theme.unit[16]} ${theme.unit[10]}`};
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.unit[4]};
  flex-shrink: 0;
  border-radius: ${({theme}) => theme.radius.circle};
  background-color: ${({theme}) => theme.color.semantic.background.normal};
`;


import styled from 'styled-components';

export const QrContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;

export const QrField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: ${({ theme }) => theme.radius.default};
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.default};
`;

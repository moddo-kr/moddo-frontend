import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.unit[20]};
  gap: ${({ theme }) => theme.unit[16]};
  min-height: 45px;
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
`;

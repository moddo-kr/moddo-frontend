import styled from 'styled-components';

export const RefTarget = styled.div`
  height: ${({ theme }) => theme.unit[24]};
`;

export const FormCard = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.unit[16]};
  border-radius: ${({ theme }) => theme.radius.large};
  border: 1px solid ${({ theme }) => theme.color.semantic.border.default};
  background: ${({ theme }) => theme.color.primitive.base.white};
`;

export const FormCardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[24]};
  width: 100%;
`;

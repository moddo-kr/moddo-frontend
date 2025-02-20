import styled from 'styled-components';

export const BillFormList = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[24]};
  width: 100%;
  flex: 1 0 0;
  overflow-y: auto;
  padding: ${({ theme }) => `${theme.unit[24]} ${theme.unit[20]}`};
  background: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
`;

// FIXME : 공통 디자인 적용하기 (BottomButtonContainer)
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.unit[20]}`};
  margin-bottom: ${({ theme }) => theme.unit[16]};
`;

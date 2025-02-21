import styled from 'styled-components';

export const TitleText = styled.h1`
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 600;
  margin-bottom: 2rem; // 32px
  white-space: pre-wrap;
  font-size: 1.25rem; // 20px
  line-height: 1.75rem; // 28px
`;

export const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.unit[28]} ${theme.unit[20]}`};
  flex: 1;
`;

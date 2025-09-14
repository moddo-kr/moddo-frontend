import styled from 'styled-components';

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
  padding: ${({ theme }) => `${theme.unit[10]} ${theme.unit[20]}`};
`;

export const CharacterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  flex: 1;
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
`;

// 다운로드 되는 회색 영역을 포함한 캐릭터 카드
export const CharacterCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: ${({ theme }) => theme.unit[18]};
  background: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
`;

export const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 19.375rem;
  height: 25rem;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.large};
  border: 1px solid ${({ theme }) => theme.color.semantic.border.default};
  background-color: ${({ theme }) => theme.color.primitive.base.white};
`;

export const CharacterImageContainer = styled.div`
  display: flex;
  width: 15rem;
  height: 14.25rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: ${({ theme }) => theme.unit[24]};
`;

import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';
import { TextButton } from '@/shared/design-system/ui';

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.625rem ${getToken('padding.6')};
`;

export const CharacterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  flex: 1;
`;

// 다운로드 되는 회색 영역을 포함한 캐릭터 카드
export const CharacterCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: ${getToken('padding.3')};
  background-color: ${getToken('bg.neutral')};
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
  border-radius: ${getToken('radius.xl')};
  border: 1px solid ${getToken('border.normal')};
  background-color: ${getToken('bg.normal')};
`;

export const EmptyStateTitle = styled.h1`
  ${applyTypography('typography.heading.medium')};
  margin: 0;
`;

export const EmptyStateDescription = styled.p`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
`;

export const PageTitle = styled.h1`
  ${applyTypography('typography.heading.medium')};
  margin: 0;
`;

export const CharacterName = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.normal')};
`;

export const CharacterDescription = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
`;

export const DownloadButton = styled(TextButton)`
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;
`;

export const CharacterImageContainer = styled.div`
  display: flex;
  width: 15rem;
  height: 14.25rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 1.5rem;
`;

import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const BottomSheetContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  padding: 2rem ${getToken('padding.6')} ${getToken('padding.6')}; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  align-items: center;
  gap: 2rem; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
`;

export const CharacterImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5rem;
  height: 11.25rem;
`;

export const CharacterImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: ${getToken('gap.4')};
`;

export const CharacterTitle = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.normal')};
`;

export const CharacterDescription = styled.span`
  ${applyTypography('typography.body.medium')};
`;

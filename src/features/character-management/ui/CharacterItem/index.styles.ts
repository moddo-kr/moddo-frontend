import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const CardContainerBase = styled.li`
  box-sizing: border-box;
  aspect-ratio: 171 / 196;
  min-height: 12.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${getToken('gap.2')};
  border-radius: ${getToken('radius.lg')};
  background-color: ${getToken('fill.primary.assistive')};
`;

export const CardContainer = styled(CardContainerBase)`
  justify-content: flex-end;
  padding-top: 2rem;
  padding-bottom: ${getToken('padding.5')};
  padding-left: ${getToken('padding.5')};
  padding-right: ${getToken('padding.5')};
  border: 1px solid ${getToken('fill.primary.assistive')};
`;

export const LockedCharacterCard = styled(CardContainerBase)`
  justify-content: center;
  padding-top: 1.75rem; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  padding-bottom: 2.25rem; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  padding-left: ${getToken('padding.5')};
  padding-right: ${getToken('padding.5')};
  border: 1px dashed #d2d4ds; /* HACK: 토큰에 정의되어 있지 않아 임시로 하드코딩함 */
`;

export const CharacterImage = styled.img`
  width: 100%;
  flex-shrink: 1;
  min-height: 0;
  object-fit: contain;
  margin-bottom: ${getToken('padding.5')};
`;

export const CharacterName = styled.span`
  ${applyTypography('typography.body.small-semibold')};
`;

export const CharacterAcquiredDate = styled.span`
  ${applyTypography('typography.caption.xsmall')};
`;

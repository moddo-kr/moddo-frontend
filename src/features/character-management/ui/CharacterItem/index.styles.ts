import styled from 'styled-components';
import { applyTypography } from '@/shared/design-system';

export const CardContainerBase = styled.li`
  box-sizing: border-box;
  aspect-ratio: 171 / 196;
  min-height: 12.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.unit[4]};
  border-radius: ${({ theme }) => theme.radius.default};
  background-color: ${({ theme }) => theme.color.semantic.orange.subtle};
`;

export const CardContainer = styled(CardContainerBase)`
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.unit[32]};
  padding-bottom: ${({ theme }) => theme.unit[16]};
  padding-left: ${({ theme }) => theme.unit[16]};
  padding-right: ${({ theme }) => theme.unit[16]};
  border: 1px solid ${({ theme }) => theme.color.semantic.orange.subtle};
`;

export const LockedCharacterCard = styled(CardContainerBase)`
  justify-content: center;
  padding-top: ${({ theme }) => theme.unit[28]};
  padding-bottom: ${({ theme }) => theme.unit[36]};
  padding-left: ${({ theme }) => theme.unit[16]};
  padding-right: ${({ theme }) => theme.unit[16]};
  border: 1px dashed ${({ theme }) => theme.color.semantic.border.default};
`;

export const CharacterImage = styled.img`
  width: 100%;
  flex-shrink: 1;
  min-height: 0;
  object-fit: contain;
  margin-bottom: ${({ theme }) => theme.unit[16]};
`;

export const CharacterName = styled.span`
  ${applyTypography('typography.body.small-semibold')};
`;

export const CharacterAcquiredDate = styled.span`
  ${applyTypography('typography.caption.xsmall')};
`;

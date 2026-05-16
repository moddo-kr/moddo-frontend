import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const BottomSheetContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  padding: ${({ theme }) =>
    `${theme.unit[32]} ${theme.unit[20]} ${theme.unit[20]} ${theme.unit[20]}`};
  align-items: center;
  gap: ${({ theme }) => theme.unit[32]};
`;

export const CharacterImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5rem;
  height: 11.25rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.unit[8]};
`;

export const CharacterTitle = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.normal')};
`;

export const CharacterDescription = styled.span`
  ${applyTypography('typography.body.medium')};
`;

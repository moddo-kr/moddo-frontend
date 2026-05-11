import styled from 'styled-components';
import { Link } from 'react-router';
import { applyTypography, getToken } from '@/shared/design-system';

export const SelectGroupButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.unit[4]};
  background: transparent;
  color: ${({ theme }) => theme.color.semantic.orange.default};
`;

export const DescriptionImg = styled.img`
  width: 9.8rem;
  object-fit: contain;
  position: absolute;
  top: 9%;
  right: -0.2rem;
  rotate: -2deg;
`;

export const NoSettlementImg = styled.img`
  width: 33vw;
  max-width: 200px;
  object-fit: contain;
`;

export const BoxButton = styled(Link)`
  display: flex;
  padding: ${({ theme }) => `${theme.unit[16]} ${theme.unit[20]}`};
  position: relative;
  height: 5rem;
  background-color: ${({ theme }) => theme.color.semantic.orange.subtle};
  border-radius: ${({ theme }) => theme.radius.default};

  width: 100%;
`;

export const SmallImg = styled.img`
  width: 2.75rem;
  object-fit: contain;
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
`;

export const BoxButtonWrapper = styled.div`
  display: flex;
  max-width: 37.5rem;
  margin: ${({ theme }) =>
    `0 ${theme.unit[20]} ${theme.unit[32]} ${theme.unit[20]}`};
  gap: ${({ theme }) => theme.unit[8]};
`;

export const SettlementListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[20]};
  margin: ${({ theme }) => `${theme.unit[20]} 0`};
  overflow-y: auto;
  flex: 1;
`;

export const BannerActionLabel = styled.span`
  ${applyTypography('typography.heading.small')};
`;

export const BannerDescription = styled.span`
  ${applyTypography('typography.body.small')};
  color: ${getToken('fg.inverse.normal')};
  display: inline-block;
  margin-top: 0.25rem; /* 4px */
`;

export const BoxButtonLabel = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.neutral')};
`;

export const SettlementStatusMessage = styled.span`
  ${applyTypography('typography.body.small')};
  color: ${getToken('fg.alternative')};
`;

export const SectionHeading = styled.span`
  ${applyTypography('typography.heading.small')};
`;

export const SortLabel = styled.span`
  ${applyTypography('typography.body.small')};
  color: ${getToken('fg.alternative')};
`;

import styled from 'styled-components';
import { Link } from 'react-router';
import { applyTypography, getToken } from '@/shared/design-system';

export const SelectGroupButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.2')};
  background: transparent;
  color: ${getToken('fg.primary.normal')};
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
  padding: ${getToken('padding.5')} ${getToken('padding.6')};
  position: relative;
  height: 5rem;
  background-color: ${getToken('fill.primary.assistive')};
  border-radius: ${getToken('radius.lg')};

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
  margin: 0 ${getToken('padding.6')} 2rem ${getToken('padding.6')}; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  gap: ${getToken('gap.4')};
`;

export const SettlementListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.7')};
  margin: ${getToken('padding.6')} 0;
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

export const BannerCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${getToken('fill.inverse.neutral')};
  height: 8.5rem;
  border-radius: ${getToken('radius.lg')};
  margin: 1.25rem;
  padding: 1.125rem ${getToken('padding.6')}; /* semantic token으로 정의되지 않은 값을 의도적으로 사용함 */
`;

export const SettlementEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: ${getToken('gap.7')};
  padding: ${getToken('padding.6')} 0;
`;

export const SettlementListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${getToken('padding.5')};
  flex-grow: 1;
`;

export const SectionHeadingRow = styled.div`
  display: flex;
  padding: ${getToken('padding.3')} ${getToken('padding.6')};
`;

export const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${getToken('padding.6')};
  height: 3rem;
`;

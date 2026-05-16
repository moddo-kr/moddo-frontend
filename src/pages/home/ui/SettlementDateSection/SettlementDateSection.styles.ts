import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
  padding: ${getToken('padding.6')} ${getToken('padding.6')}
    ${getToken('padding.2')};
`;

export const Date = styled.span`
  ${applyTypography('typography.body.medium-semibold')}
  color: ${getToken('fg.alternative')};
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
`;

import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  width: 100%;
  background: ${getToken('fill.neutral')};
  border-radius: ${getToken('radius.xl')};
  padding: ${getToken('padding.6')};
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.2')};
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const Description = styled.span`
  ${applyTypography('typography.body.medium')}
  color: ${getToken('fg.alternative')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Amount = styled.span`
  ${applyTypography('typography.heading.small')}
  color: ${getToken('fg.normal')};
`;

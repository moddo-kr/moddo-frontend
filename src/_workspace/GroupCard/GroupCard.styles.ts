import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
  width: 100%;
  background: ${getToken('fill.normal')};
  border: 1px solid ${getToken('border.neutral')};
  border-radius: ${getToken('radius.xl')};
  padding: ${getToken('padding.5')} ${getToken('padding.6')};
`;

export const GroupName = styled.span`
  ${applyTypography('typography.body.medium-semibold')}
  color: ${getToken('fg.neutral')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${getToken('gap.2')};
`;

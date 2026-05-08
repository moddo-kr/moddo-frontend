import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  min-width: 0;
  flex: 1;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

export const Nickname = styled.span`
  ${applyTypography('typography.body.small-semibold')}
  color: ${getToken('fg.alternative')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const Amount = styled.span`
  ${applyTypography('typography.title.small')}
  color: ${getToken('fg.normal')};
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
`;

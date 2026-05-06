import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.8')};
  background: ${getToken('bg.normal')};
  border-radius: ${getToken('radius.lg')};
  /* HACK: py 24px에 해당하는 padding 토큰 없음. gap.8(24px)을 임시 사용. */
  padding: ${getToken('gap.8')} ${getToken('padding.6')};
  width: 100%;
  /* HACK: 330px에 해당하는 너비 토큰 없음. */
  min-width: 330px;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
`;

export const Title = styled.p`
  ${applyTypography('typography.title.medium')}
  color: ${getToken('fg.strong')};
`;

export const Description = styled.p`
  ${applyTypography('typography.body.medium')}
  color: ${getToken('fg.normal')};
`;

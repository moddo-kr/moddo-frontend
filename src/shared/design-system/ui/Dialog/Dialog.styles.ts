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
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  /* 데스크톱 대응 시 미디어쿼리로 확장 검토 필요. */
  max-width: 330px;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
`;

export const Title = styled.h2`
  margin: 0;
  ${applyTypography('typography.title.medium')}
  color: ${getToken('fg.strong')};
  white-space: pre-line;
`;

export const Description = styled.div`
  margin: 0;
  ${applyTypography('typography.body.medium')}
  color: ${getToken('fg.normal')};
  white-space: pre-line;
`;

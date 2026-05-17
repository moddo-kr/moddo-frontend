import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem 0; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
`;

export const TitleWrapper = styled.div`
  padding: ${getToken('padding.3')} ${getToken('padding.6')};
`;

export const CharacterGrid = styled.div`
  padding: ${getToken('padding.6')};
`;

export const SectionTitle = styled.span`
  ${applyTypography('typography.title.small')};
  color: ${getToken('fg.normal')};
`;

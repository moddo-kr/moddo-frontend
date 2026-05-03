import styled from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';

const titleTypo = getTypographyToken('typography.heading.small');
const subTypo = getTypographyToken('typography.body.medium');

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* HACK: 수직 padding 10px에 대응하는 semantic 토큰 없음 */
  padding: 10px ${getToken('padding.6')};
  gap: ${getToken('gap.2')};
  white-space: pre-line;
`;

export const Title = styled.div`
  font-family: ${titleTypo.fontFamily};
  font-size: ${titleTypo.fontSize};
  font-weight: ${titleTypo.fontWeight};
  line-height: ${titleTypo.lineHeight};
  letter-spacing: ${titleTypo.letterSpacing};
  color: ${getToken('fg.strong')};
`;

export const Sub = styled.div`
  font-family: ${subTypo.fontFamily};
  font-size: ${subTypo.fontSize};
  font-weight: ${subTypo.fontWeight};
  line-height: ${subTypo.lineHeight};
  letter-spacing: ${subTypo.letterSpacing};
  color: ${getToken('fg.alternative')};
`;

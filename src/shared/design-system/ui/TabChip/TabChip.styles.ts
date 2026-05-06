import styled from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';

const typo = getTypographyToken('typography.body.small');

export const TabChipList = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
`;

export const TabChip = styled.button<{ $isActive: boolean }>`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${getToken('padding.3')} ${getToken('padding.4')};
  border-radius: ${getToken('radius.full')};
  white-space: nowrap;

  background: ${({ $isActive }) =>
    $isActive ? getToken('fill.inverse.neutral') : getToken('fill.neutral')};
  color: ${({ $isActive }) =>
    $isActive ? getToken('fg.inverse.normal') : getToken('fg.alternative')};

  font-family: ${typo.fontFamily};
  font-size: ${typo.fontSize};
  font-weight: ${typo.fontWeight};
  line-height: ${typo.lineHeight};
  letter-spacing: ${typo.letterSpacing};

  /* HACK: focus ring에 대응하는 semantic token 없음, fill.inverse.neutral 사용 */
  &:focus-visible {
    outline: 2px solid ${getToken('fill.inverse.neutral')};
    outline-offset: 2px;
  }
`;

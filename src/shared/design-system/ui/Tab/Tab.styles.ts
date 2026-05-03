import styled from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';

const activeTypo = getTypographyToken('typography.body.medium-semibold');
const inactiveTypo = getTypographyToken('typography.body.medium');

export const TabList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${getToken('gap.6')};
`;

export const Tab = styled.button<{ $isActive: boolean }>`
  all: unset;
  cursor: pointer;
  padding-bottom: ${getToken('padding.4')};
  border-bottom: 3px solid
    ${({ $isActive }) => ($isActive ? getToken('fg.normal') : 'transparent')};

  font-family: ${({ $isActive }) =>
    $isActive ? activeTypo.fontFamily : inactiveTypo.fontFamily};
  font-size: ${({ $isActive }) =>
    $isActive ? activeTypo.fontSize : inactiveTypo.fontSize};
  font-weight: ${({ $isActive }) =>
    $isActive ? activeTypo.fontWeight : inactiveTypo.fontWeight};
  line-height: ${({ $isActive }) =>
    $isActive ? activeTypo.lineHeight : inactiveTypo.lineHeight};
  letter-spacing: ${({ $isActive }) =>
    $isActive ? activeTypo.letterSpacing : inactiveTypo.letterSpacing};
  color: ${({ $isActive }) =>
    $isActive ? getToken('fg.normal') : getToken('fg.normal-disable')};

  white-space: nowrap;
`;

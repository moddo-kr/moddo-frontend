import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

// 공통 베이스
export const HeaderArea = styled.header<{ $bgColor?: string }>`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 998;
  padding: 1rem 1.25rem;
  width: 100%;
  min-width: 320px;
  height: 56px;
  background-color: ${({ $bgColor }) => $bgColor || 'white'};
`;

// default: heading(좌) + title(중앙) + trailing(우)
export const DefaultHeaderArea = styled(HeaderArea)`
  justify-content: space-between;
`;

export const DefaultTitleArea = styled.h2`
  all: unset;
  ${applyTypography('typography.body.medium-semibold')};
  white-space: nowrap;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: ${getToken('fg.normal')};
`;

// 1depth: title(좌) + trailing(우)
export const Depth1HeaderArea = styled(HeaderArea)`
  justify-content: space-between;
`;

export const Depth1TitleArea = styled.h2`
  all: unset;
  ${applyTypography('typography.heading.medium')};
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: ${getToken('fg.normal')};
`;

// heading 영역 (default 전용, 좌측)
export const HeadingArea = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.2')};
`;

export const HeadingLabel = styled.span`
  color: ${getToken('fg.neutral')};
`;

// trailing 영역 (공통, 우측)
export const TrailingArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TrailingLabel = styled.span`
  color: ${getToken('fg.neutral')};
`;

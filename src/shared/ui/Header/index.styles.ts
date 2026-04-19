import styled from 'styled-components';
import { TextVariant } from '@/shared/ui/Text/index.styles';

// 공통 베이스
export const HeaderArea = styled.header<{ $bgColor?: string }>`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 998;
  padding: 1rem 1.25rem; // px로 변환하면 16px 20px
  width: 100%;
  min-width: 320px;
  max-height: 64px;
  height: 100%;
  background-color: ${({ $bgColor }) => $bgColor || 'white'};
`;

// default: heading(좌) + title(중앙) + trailing(우)
export const DefaultHeaderArea = styled(HeaderArea)`
  justify-content: space-between;
`;

export const DefaultTitleArea = styled.h2`
  all: unset;
  ${TextVariant('body1Sb')};
  white-space: nowrap;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

// 1depth: title(좌) + trailing(우)
export const Depth1HeaderArea = styled(HeaderArea)`
  justify-content: space-between;
`;

export const Depth1TitleArea = styled.h2`
  all: unset;
  ${TextVariant('heading1')};
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.primitive.gray[600]};
`;

// heading 영역 (default 전용, 좌측)
export const HeadingArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// trailing 영역 (공통, 우측)
export const TrailingArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// 아이콘 버튼 래퍼
export const IconButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

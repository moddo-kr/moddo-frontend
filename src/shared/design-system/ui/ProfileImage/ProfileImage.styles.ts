import styled from 'styled-components';
import { getToken } from '@/shared/design-system';
import type { ProfileImageSize } from './ProfileImage';

/* 36 | 40 | 48 | 68: 이미지 크기에 대응하는 semantic 토큰 없음 */
const sizeMap: Record<ProfileImageSize, string> = {
  '36': '36px',
  '40': '40px',
  '48': '48px',
  '68': '68px',
};

export const Image = styled.img<{ $size: ProfileImageSize }>`
  width: ${({ $size }) => sizeMap[$size]};
  height: ${({ $size }) => sizeMap[$size]};
  border-radius: ${getToken('radius.full')};
  object-fit: contain;
  flex-shrink: 0;
`;

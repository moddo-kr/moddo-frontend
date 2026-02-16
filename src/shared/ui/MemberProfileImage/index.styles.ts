import styled from 'styled-components';

interface ProfileImgProps {
  $size: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: '2.25rem',
  md: '2.5rem',
  lg: '4.25rem',
} as const;

export const Image = styled.img<ProfileImgProps>`
  width: ${(props) => sizeMap[props.$size]};
  height: ${(props) => sizeMap[props.$size]};
  object-fit: contain;
  border-radius: 50%;
`;

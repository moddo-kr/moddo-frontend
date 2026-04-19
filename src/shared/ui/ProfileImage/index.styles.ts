import styled from 'styled-components';

interface ProfileImgProps {
  $size: '36' | '40' | '48' | '68';
}

const sizeMap = {
  '36': '2.25rem',
  '40': '2.5rem',
  '48': '3rem',
  '68': '4.25rem',
} as const;

export const Image = styled.img<ProfileImgProps>`
  width: ${(props) => sizeMap[props.$size]};
  height: ${(props) => sizeMap[props.$size]};
  object-fit: contain;
  border-radius: 50%;
`;

import defaultProfileImg from '@/shared/assets/pngs/defaultProfileImg.png';
import * as S from './index.styles';

interface MemberProfileImageProps {
  src: string;
  size: 'sm' | 'md' | 'lg';
}

function MemberProfileImage({ src, size }: MemberProfileImageProps) {
  return <S.Image src={src || defaultProfileImg} $size={size || 'md'} />;
}

export default MemberProfileImage;

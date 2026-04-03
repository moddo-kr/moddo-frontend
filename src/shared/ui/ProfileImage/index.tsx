import defaultProfileImg from '@/shared/assets/pngs/defaultProfileImg.png';
import * as S from './index.styles';

interface ProfileImageProps {
  src?: string;
  size: '36' | '40' | '48' | '68';
}

function ProfileImage({ src, size }: ProfileImageProps) {
  return <S.Image src={src || defaultProfileImg} $size={size} />;
}

export default ProfileImage;

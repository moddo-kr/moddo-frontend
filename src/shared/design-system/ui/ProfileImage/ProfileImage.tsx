import defaultProfileImg from '@/shared/assets/pngs/defaultProfileImg.png';
import * as S from './ProfileImage.styles';

type ProfileImageSize = '36' | '40' | '48' | '68';

interface ProfileImageProps {
  src?: string;
  size: ProfileImageSize;
}

function ProfileImage({ src, size }: ProfileImageProps) {
  return <S.Image src={src || defaultProfileImg} $size={size} alt="" />;
}

export { ProfileImage };
export type { ProfileImageProps, ProfileImageSize };

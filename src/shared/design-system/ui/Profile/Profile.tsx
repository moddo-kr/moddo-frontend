import SvgSystemDanger from '@/shared/assets/svgs/icon/SystemDanger';
import SvgSystemSuccess from '@/shared/assets/svgs/icon/SystemSuccess';
import { ProfileImage } from '../ProfileImage';
import * as S from './Profile.styles';

type ProfileSize = 's' | 'm' | 'L';
type ProfileType = 'delete' | 'checked' | 'disabled';

interface ProfileProps {
  size: ProfileSize;
  type?: ProfileType;
  label: string;
  src?: string;
  onDelete?: () => void;
}

const profileImageSizeMap: Record<ProfileSize, '36' | '48' | '68'> = {
  s: '36',
  m: '48',
  L: '68',
};

function Profile({
  size,
  type = 'delete',
  label,
  src,
  onDelete,
}: ProfileProps) {
  const imageSize = profileImageSizeMap[size];

  return (
    <S.Container aria-disabled={type === 'disabled' ? true : undefined}>
      <S.ImageWrapper $size={size}>
        <ProfileImage src={src} size={imageSize} />
        {type === 'delete' && (
          <S.DeleteButton
            type="button"
            $size={size}
            onClick={onDelete}
            aria-label={`${label} 삭제`}
          >
            <SvgSystemDanger width="100%" height="100%" aria-hidden="true" />
          </S.DeleteButton>
        )}
        {type === 'checked' && (
          <S.CheckedIcon $size={size}>
            <SvgSystemSuccess width="100%" height="100%" aria-hidden="true" />
          </S.CheckedIcon>
        )}
        {type === 'disabled' && <S.DimOverlay />}
      </S.ImageWrapper>
      <S.Label $size={size}>{label}</S.Label>
    </S.Container>
  );
}

export { Profile };
export type { ProfileProps, ProfileSize, ProfileType };

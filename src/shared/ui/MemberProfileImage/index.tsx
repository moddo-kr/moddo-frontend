import defaultProfileImg from '@/shared/assets/pngs/defaultProfileImg.png';
import * as S from './index.styles';

interface MemberProfileImageProps {
  src?: string;
  size: 'sm' | 'md' | 'lg';
}

// TODO: Profile 디자인시스템 컴포넌트 정의 필요
function MemberProfileImage({ src, size }: MemberProfileImageProps) {
  return <S.Image src={src || defaultProfileImg} $size={size || 'md'} />;
}

export default MemberProfileImage;

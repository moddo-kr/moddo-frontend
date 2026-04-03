import { MouseEventHandler } from 'react';
import { CheckCircle, SystemDanger } from '@/shared/assets/svgs/icon';
import ProfileImage from '@/shared/ui/ProfileImage';
import Text from '@/shared/ui/Text';
import Flex from '@/shared/ui/Flex';
import * as S from './index.style';

interface ProfileProps {
  id: number;
  imageSrc?: string;
  name: string;
  size?: 'S' | 'm' | 'L';
  type?: 'default' | 'delete' | 'checked' | 'disabled';
  onDelete?: (id: number) => void;
  onClick?: () => void;
}

const sizeConfig = {
  S: { imageSize: '36' as const, iconPx: 20, textVariant: 'caption' as const },
  m: { imageSize: '48' as const, iconPx: 24, textVariant: 'body2R' as const },
  L: { imageSize: '68' as const, iconPx: 24, textVariant: 'body2R' as const },
};

function Profile({
  id,
  imageSrc,
  name,
  size = 'm',
  type = 'default',
  onDelete,
  onClick,
}: ProfileProps) {
  const { imageSize, iconPx, textVariant } = sizeConfig[size];

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    // onDelete 이벤트와 별개로 동작하기 위해 전파 방지
    e.stopPropagation();
    onClick?.();
  };

  const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    // onClick 이벤트와 별개로 동작하기 위해 전파 방지
    e.stopPropagation();
    onDelete?.(id);
  };

  return (
    <Flex
      key={id}
      gap={4}
      direction="column"
      alignItems="center"
      width="fit-content"
      py={8}
      style={{
        opacity: type === 'disabled' ? 0.4 : 1,
        cursor: type === 'disabled' ? 'default' : 'pointer',
      }}
      onClick={handleClick}
    >
      <S.ProfileWrapper>
        {type === 'delete' && (
          <S.DeleteButton onClick={handleDeleteClick}>
            <SystemDanger width={iconPx} height={iconPx} />
          </S.DeleteButton>
        )}
        {type === 'checked' && (
          <S.CheckedIcon $size={iconPx}>
            <CheckCircle />
          </S.CheckedIcon>
        )}
        <ProfileImage src={imageSrc} size={imageSize} />
      </S.ProfileWrapper>
      <Text variant={textVariant}>{name}</Text>
    </Flex>
  );
}

export default Profile;

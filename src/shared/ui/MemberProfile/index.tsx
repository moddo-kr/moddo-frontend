import defaultProfileImg from '@/shared/assets/pngs/defaultProfileImg.png';
import { SystemDanger } from '@/shared/assets/svgs/icon';
import Text from '@/shared/ui/Text';
import Flex from '@/shared/ui/Flex';
import * as S from './index.style';

interface MemberProfileProps {
  id: number;
  profile?: string;
  name: string;
  canDelete?: boolean;
  handleDeleteButtonClick: (id: number) => void;
}

function MemberProfile({
  id,
  profile,
  name,
  canDelete = true,
  handleDeleteButtonClick,
}: MemberProfileProps) {
  return (
    <Flex
      key={id}
      gap={4}
      direction="column"
      alignItems="center"
      width="fit-content"
      py={8}
    >
      <S.ProfileWrapper>
        {canDelete && (
          <S.DeleteButton onClick={() => handleDeleteButtonClick(id)}>
            <SystemDanger width="1.1rem" height="1.1rem" />
          </S.DeleteButton>
        )}
        <S.ProfileImg src={profile || defaultProfileImg} alt="profile" />
      </S.ProfileWrapper>
      <Text variant="caption">{name}</Text>
    </Flex>
  );
}

export default MemberProfile;

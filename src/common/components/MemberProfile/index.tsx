import defaultProfileImg from '@/assets/pngs/defaultProfileImg.png';
import { SystemDanger } from '@/assets/svgs/icon';
import Text from '@/common/components/Text';
import Flex from '@/common/components/Flex';
import { Member } from '@/common/types/member.type';
import * as S from './index.style';

interface MemberProfileProps {
  member: Member;
  handleDeleteButtonClick: (id: number) => void;
}

function MemberProfile({
  member,
  handleDeleteButtonClick,
}: MemberProfileProps) {
  return (
    <Flex
      key={member.id}
      gap={1}
      direction="column"
      alignItems="center"
      width="fit-content"
      py={2}
    >
      <S.ProfileWrapper>
        {member.role !== 'MANAGER' && (
          <S.DeleteButton onClick={() => handleDeleteButtonClick(member.id)}>
            <SystemDanger width="1.1rem" height="1.1rem" />
          </S.DeleteButton>
        )}
        <S.ProfileImg src={member.profile || defaultProfileImg} alt="profile" />
      </S.ProfileWrapper>
      <Text variant="caption">{member.name}</Text>
    </Flex>
  );
}

export default MemberProfile;

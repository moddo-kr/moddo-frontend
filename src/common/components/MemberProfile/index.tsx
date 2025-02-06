import { Flex, Text } from '@chakra-ui/react';
import defaultProfileImg from '@/assets/pngs/defaultProfileImg.png';
import { Member } from '@/common/types/member.type';
import * as S from './index.style';
import { DeleteButtonIcon } from '@/assets/svgs';
import { getRandomColor } from '@/common/utils/getRandomColor';
import { useMemo } from 'react';

interface MemberProfileProps {
  member: Member;
  handleDeleteButtonClick: (id: string) => void;
}

function MemberProfile({
  member,
  handleDeleteButtonClick,
}: MemberProfileProps) {
  // useMemo를 사용하여 부모 컴포넌트의 리렌더링에도 불필요하게 새로운 색상이 생성되지 않도록 함
  const profileBgColor = useMemo(() => getRandomColor(), []);

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
        {member.role !== 'treasurer' && (
          <S.DeleteButton onClick={() => handleDeleteButtonClick(member.id)}>
            <DeleteButtonIcon width="1.1rem" height="1.1rem" />
          </S.DeleteButton>
        )}
        <S.ProfileImg
          src={defaultProfileImg}
          alt="profile"
          bgcolor={profileBgColor}
        />
      </S.ProfileWrapper>
      <Text fontSize={12} lineHeight="1.5">
        {member.name}
      </Text>
    </Flex>
  );
}

export default MemberProfile;

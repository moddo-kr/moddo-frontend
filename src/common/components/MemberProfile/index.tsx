import { Flex, Text } from '@chakra-ui/react';
import defaultProfileImg from '@/assets/pngs/defaultProfileImg.png';
import { Member } from '@/common/types/member.type';
import * as S from './index.style';
import { DeleteButtonIcon } from '@/assets/svgs';
import { getRandomColor } from '@/common/utils/getRandomColor';
import { useMemo } from 'react';

interface MemberProfileProps {
  member: Member;
  index: number;
  handleDeleteButtonClick: (index: number) => void;
}

function MemberProfile({
  member,
  index,
  handleDeleteButtonClick,
}: MemberProfileProps) {
  
  const profileBgColor = useMemo(() => getRandomColor(), []);

  return (
    <Flex key={index} gap={1} direction="column" alignItems="center" width="fit-content">
      <S.ProfileWrapper>
        <S.DeleteButton onClick={() => handleDeleteButtonClick(index)}>
          <DeleteButtonIcon width="1.1rem" height="1.1rem"/>
        </S.DeleteButton>
        <S.ProfileImg
          src={defaultProfileImg}
          alt="profile"
          bgColor={profileBgColor}
        />
      </S.ProfileWrapper>
      <Text fontSize={12} lineHeight="1.5">{member.name}</Text>
    </Flex>
  );
}

export default MemberProfile;

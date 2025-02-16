import { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
// import { nanoid } from 'nanoid';
import Header from '@/common/components/Header';
import AddMember from '@/common/components/AddMember';
import { Member } from '@/common/types/member.type';
import * as S from '../index.styles';
import usePostCreateGroupMembers from '@/common/queries/groupMembers/useCreateGroupMembers';
import { ROUTE } from '@/common/constants/route';
import defaultProfileImg from '@/assets/pngs/defaultProfileImg.png';

export interface ParticipantProfile {
  name: string;
  profileImgUrl: string;
}

// 비회원 총무 정보
const defaultMembers: Member[] = [
  {
    id: Date.now(),
    name: '김모또(총무)',
    role: 'MANAGER',
    profile: defaultProfileImg,
    isPaid: true,
    paidAt: null,
  },
];

function MemberSetup() {
  const navigate = useNavigate();
  /**
   * 비회원일때를 가정하여 총무를 members에 추가함
   * @Todo 회원일 경우 store에서 총무를 members에 추가하기
   */
  const [members, setMembers] = useState<Member[]>(defaultMembers);
  const { mutate: createGroupMembersMutate } = usePostCreateGroupMembers();

  const handleSubmitButton = async () => {
    const groupMemberData = members
      .filter((member) => member.role !== 'MANAGER')
      .map((member) => ({ name: member.name }));
    await createGroupMembersMutate(groupMemberData);
  };

  return (
    <>
      <Header
        title=""
        showIcon
        type="TitleLeft"
        handleBackButtonClick={() => navigate(-1)}
      />
      <Flex
        direction="column"
        justify="space-between"
        mx="5"
        height="100%"
        mt="10px"
        mb="32px"
        flexGrow={1}
      >
        <Flex direction="column">
          <S.TitleText>
            모임에 함께한
            <br />
            참여자를 추가해주세요.
          </S.TitleText>
          <AddMember members={members} setMembers={setMembers} />
        </Flex>
        <Button height={12} borderRadius={12} onClick={handleSubmitButton}>
          정산 시작!
        </Button>
      </Flex>
    </>
  );
}

export default MemberSetup;

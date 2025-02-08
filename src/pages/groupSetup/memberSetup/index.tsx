import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import * as S from '../index.styles';
import Header from '@/common/components/Header';
import AddMember from '@/common/components/AddMember';
import { ROUTE } from '@/common/constants/route';
import { useGroupSetupStore } from '@/pages/groupSetup/stores/useGroupSetupStore';

export interface ParticipantProfile {
  name: string;
  profileImgUrl: string;
}

function MemberSetup() {
  const navigate = useNavigate();
  const { members, setMembers } = useGroupSetupStore();

  return (
    <>
      <Header
        title=""
        showIcon={true}
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
        <Button
          height={12}
          borderRadius={12}
          onClick={() => navigate(ROUTE.createBill)}
        >
          정산 시작!
        </Button>
      </Flex>
    </>
  );
}

export default MemberSetup;

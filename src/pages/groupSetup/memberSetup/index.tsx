import { Button, Flex } from '@chakra-ui/react';
import { useLoaderData, useNavigate } from 'react-router';
import Header from '@/common/components/Header';
import AddMember from '@/common/components/AddMember';
import { Member } from '@/common/types/member.type';
import defaultProfileImg from '@/assets/pngs/defaultProfileImg.png';
import useGetGroupBasicInfo from '@/common/queries/group/useGetGroupBasicInfo';
import { ROUTE } from '@/common/constants/route';
import * as S from '../index.styles';

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
  const { groupToken } = useLoaderData();
  const { data, isLoading, isError } = useGetGroupBasicInfo(groupToken);

  if (isLoading || isError) {
    return <div>로딩중</div>;
  }

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

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
          {/* NOTE : 현재는 그룹 생성 직후에 모임에 총무 데이터가 없어 임의로 넣어줘야 합니다! */}
          <AddMember members={[...data.members.reverse(), ...defaultMembers]} />
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

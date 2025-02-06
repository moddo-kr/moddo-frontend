import { Button, Flex} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import * as S from '../index.styles';
import Header from '@/common/components/Header';
import AddMember from '@/common/components/AddMember';
import { ROUTE } from '@/common/constants/route';

export interface ParticipantProfile {
  name: string;
  profileImgUrl: string;
}

function MemberSetup() {
  const navigate = useNavigate();

  return (
    <>
      <Header title="" showIcon={true} type="TitleLeft" />
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
            함께한 참가자를
            <br />
            추가해주세요.
          </S.TitleText>
          <AddMember />
        </Flex>
        <Button height={12} borderRadius={12} onClick={() => navigate(ROUTE.create)}>
          다음
        </Button>
      </Flex>
    </>
  );
}

export default MemberSetup;

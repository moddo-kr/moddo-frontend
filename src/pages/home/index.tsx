import { ArrowRightIcon, LogoIcon, MenuIcon } from '@/assets/svgs';
import MainHamImg from '@/assets/pngs/MainHamImg.png';
import * as S from './index.style';
import { Flex, Text } from '@chakra-ui/react';
import { Next } from '@/assets/svgs/icon';
import { useNavigate } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import { useState } from 'react';
import CoinImg from '@/assets/pngs/CoinImg.png';

function Home() {
  const [settlementType, setSettlementType] = useState<'RECEIVE' | 'SEND'>(
    'RECEIVE'
  );
  const navigate = useNavigate();

  const handleSettlementTypeButtonClick = (type: 'RECEIVE' | 'SEND') => {
    if (settlementType === type) {
      return;
    }
    setSettlementType(type);
  };

  /** @Todo 진행중인 정산 내역 조회 API 함수 호출 */
  const settlementList = [];

  return (
    <Flex direction="column" height="100dvh">
      <S.MainHeader>
        <LogoIcon width={98} height={36} />
        <MenuIcon width={24} height={24} />
      </S.MainHeader>
      <Flex
        direction="column"
        position="relative"
        bgColor={'#FAF6F3'}
        height={'231px'}
      >
        <Flex direction="column" gap={1} px={5} py={2.5}>
          <S.MainText>즐거운 만남, 끝까지 즐겁게!</S.MainText>
          <S.SubText>
            참여자들이 빠르게 정산을 완료할수록
            <br />
            멋진 캐릭터를 얻을 수 있어요!
          </S.SubText>
        </Flex>
        <S.SelectGroupButton onClick={() => navigate(ROUTE.selectGroup)}>
          정산 시작하기
          <ArrowRightIcon width={20} height={20} />
        </S.SelectGroupButton>
        <S.DescriptionImg src={MainHamImg} alt="mainHamImg" />
      </Flex>
      <S.Hr />
      <Flex direction="column" gap={2} pt={5} flexGrow={1}>
        <S.SettlementTitle>진행중인 정산</S.SettlementTitle>
        <Flex justifyContent="space-between" px={5} py={3} alignItems="center">
          <Flex gap={2}>
            <S.SettlementButton
              selected={settlementType === 'RECEIVE'}
              onClick={() => handleSettlementTypeButtonClick('RECEIVE')}
            >
              받을 정산
            </S.SettlementButton>
            <S.SettlementButton
              selected={settlementType === 'SEND'}
              onClick={() => handleSettlementTypeButtonClick('SEND')}
            >
              보낼 정산
            </S.SettlementButton>
          </Flex>
          <Flex alignItems="center" fontSize={14}>
            최신순
            <Next
              width={24}
              height={24}
              style={{ transform: 'rotate(180deg)' }}
            />
          </Flex>
        </Flex>
        {settlementList.length > 0 ? (
          /** @Todo 정산리스트 컴포넌트 구현*/
          <div>정산리스트</div>
        ) : (
          <Flex
            direction="column"
            py={15}
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
          >
            <S.NoSettlementImg src={CoinImg} alt="noSettlement" />
            <Text
              px={5}
              py={2.5}
              fontSize={16}
              lineHeight={1.5}
              color="#6F7379"
            >
              아직 진행중인 정산이 없어요.
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default Home;

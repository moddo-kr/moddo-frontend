import { useTheme } from 'styled-components';
import { LogoIcon } from '@/assets/svgs';
// import MainHamImg from '@/assets/pngs/MainHamImg.png';
import MainHamImg2 from '@/assets/pngs/MainHamImg2.png';
import { Flex } from '@chakra-ui/react';
import Text from '@/common/components/Text';
import { ArrowRight, Bell, Menu, Next } from '@/assets/svgs/icon';
import { useNavigate } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import { useState } from 'react';
import CoinImg from '@/assets/pngs/CoinImg.png';
import LinkMain from '@/assets/pngs/link_main.png';
import CardMain from '@/assets/pngs/card_main.png';
import * as S from './index.style';

function Home() {
  const [settlementType, setSettlementType] = useState<'RECEIVE' | 'SEND'>(
    'RECEIVE'
  );
  const navigate = useNavigate();
  const theme = useTheme();

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
        <LogoIcon
          width={98}
          height={36}
          fill={theme.color.semantic.orange.default}
        />
        <Flex gap={4}>
          <Bell width={24} height={24} />
          <Menu width={24} height={24} />
        </Flex>
      </S.MainHeader>
      <Flex
        direction="column"
        position="relative"
        bgColor={theme.color.semantic.primary.default}
        height="136px"
        borderRadius={theme.radius.default}
        margin={5}
        px={5}
        py={5}
      >
        <S.SelectGroupButton onClick={() => navigate(ROUTE.selectGroup)}>
          <Text variant="heading2">정산하기</Text>
          <ArrowRight
            width={theme.unit[20]}
            height={theme.unit[20]}
            fill={theme.color.semantic.orange.default}
          />
        </S.SelectGroupButton>
        <Flex direction="column" py={2.5}>
          <Text variant="body2R" color="semantic.text.inverse">
            모임은 즐겁게, 정산은 깔끔하게!
            <br />
            모또만 믿고 맡겨줘!
          </Text>
        </Flex>
        <S.DescriptionImg src={MainHamImg2} alt="mainHamImg2" />
      </Flex>
      <S.BoxButtonWrapper>
        <S.BoxButton>
          <Text variant="body1Sb" color="semantic.text.default">
            링크 관리
          </Text>
          <S.SmallImg src={LinkMain} />
        </S.BoxButton>
        <S.BoxButton>
          <Text variant="body1Sb" color="semantic.text.default">
            캐릭터 도감
          </Text>
          <S.SmallImg src={CardMain} />
        </S.BoxButton>
      </S.BoxButtonWrapper>
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
            <Next width={theme.unit[24]} height={theme.unit[24]} />
          </Flex>
        </Flex>
        {settlementList.length > 0 ? (
          /** @Todo 정산리스트 컴포넌트 구현 */
          <div>정산리스트</div>
        ) : (
          <Flex
            direction="column"
            py={15}
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
            gap={6}
          >
            <S.NoSettlementImg src={CoinImg} alt="noSettlement" />
            <Text
              variant="body2R"
              color='semantic.text.subtle'
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

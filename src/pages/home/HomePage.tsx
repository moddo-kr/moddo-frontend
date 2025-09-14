import { useTheme } from 'styled-components';
import { LogoIcon } from '@/shared/assets/svgs';
import MainHamImg2 from '@/shared/assets/pngs/MainHamImg2.png';
import Text from '@/shared/ui/Text';
import { ArrowRight, Bell, Menu, Next } from '@/shared/assets/svgs/icon';
import { useNavigate } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import { useState } from 'react';
import CoinImg from '@/shared/assets/pngs/CoinImg.png';
import LinkMain from '@/shared/assets/pngs/link_main.png';
import CardMain from '@/shared/assets/pngs/card_main.png';
import Divider from '@/shared/ui/Divider';
import Flex from '@/shared/ui/Flex';
import HomeExpenseItem from './ui/HomeExpenseItem';
import * as S from './HomePage.style';

interface HomeExpenseItemType {
  date: string;
  groupName: string;
  totalAmount: number;
  paidMember: number;
  totalMember: number;
  id: number;
}
/**
 * @Todo 진행중인 정산 내역 조회 API 함수 호출
 * 우선 mock data로 대체
 * */
const settlementList: HomeExpenseItemType[] = [
  {
    id: 1,
    date: '2025년 2월 22일',
    groupName: 'DND 데모데이',
    totalAmount: 120000,
    paidMember: 3,
    totalMember: 6,
  },
  {
    id: 2,
    date: '2025년 1월 14일',
    groupName: 'DND 7조 첫모임',
    totalAmount: 150000,
    paidMember: 5,
    totalMember: 6,
  },
];

function HomePage() {
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

  return (
    <Flex direction="column" flexGrow={1}>
      <S.MainHeader>
        <LogoIcon
          width={98}
          height={36}
          fill={theme.color.semantic.orange.default}
          onClick={() => navigate(ROUTE.login)}
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
        <S.DescriptionImg src={MainHamImg2} alt="" />
      </Flex>
      <S.BoxButtonWrapper>
        <S.BoxButton>
          <Text variant="body1Sb" color="semantic.text.default">
            링크 관리
          </Text>
          <S.SmallImg src={LinkMain} alt="" />
        </S.BoxButton>
        <S.BoxButton>
          <Text variant="body1Sb" color="semantic.text.default">
            캐릭터 도감
          </Text>
          <S.SmallImg src={CardMain} alt="" />
        </S.BoxButton>
      </S.BoxButtonWrapper>
      <Divider />
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
        {settlementList.length > 0 && settlementType === 'RECEIVE' && (
          <S.SettlementListWrapper>
            {settlementList.map((data) => (
              <HomeExpenseItem
                key={data.id}
                date={data.date}
                groupName={data.groupName}
                totalAmount={data.totalAmount}
                paidMember={data.paidMember}
                totalMember={data.totalMember}
              />
            ))}
          </S.SettlementListWrapper>
        )}
        {settlementType === 'SEND' && (
          <Flex
            direction="column"
            py={15}
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
            gap={6}
          >
            <S.NoSettlementImg src={CoinImg} alt="" />
            <Text variant="body2R" color="semantic.text.subtle">
              아직 진행중인 정산이 없어요.
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default HomePage;

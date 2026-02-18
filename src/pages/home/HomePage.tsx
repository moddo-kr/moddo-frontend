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
import Button from '@/shared/ui/Button';
import Header from '@/shared/ui/Header';

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
const settlementListMock: HomeExpenseItemType[] = [
  {
    id: 1,
    date: '2026년 2월 22일',
    groupName: 'DND 데모데이',
    totalAmount: 120000,
    paidMember: 3,
    totalMember: 6,
  },
  {
    id: 2,
    date: '2026년 1월 14일',
    groupName: 'DND 7조 첫모임',
    totalAmount: 150000,
    paidMember: 5,
    totalMember: 6,
  },
];

type SettlementType = 'RECEIVE' | 'SEND';

function HomePage() {

  return (
    <Flex direction="column" flexGrow={1}>
      <MainHeader />
      <SettlementBanner />
      <Divider />
      <SettlementList />
    </Flex>
  );
}

function MainHeader() {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Header
        type="TitleCenter"
        leftButtonContent={
          <Button variant="text" onClick={() => navigate(ROUTE.login)}>
            <LogoIcon
              width={98}
              height={36}
              fill={theme.color.semantic.orange.default}
            />
          </Button>
        }
        rightButtonContent={
          <Flex gap={16}>
            {/** @Todo 알림 기능 개발 후 변경 */}
            <Button variant="text">
              <Bell width={24} height={24} />
            </Button>
            {/** @Todo 마이페이지로 이동하는 핸들러 추가 */}
            <Button variant="text">
              <Menu width={24} height={24} />
            </Button>
          </Flex>
        }
        bgColor="semantic.background.normal.alternative"
      />
  );
}

function SettlementBanner() {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
      <Flex
        direction="column"
        position="relative"
        bgColor={theme.color.semantic.primary.default}
        height="136px"
        borderRadius={theme.radius.default}
        margin={20}
        px={20}
        py={18}
      >
        <S.SelectGroupButton onClick={() => navigate(ROUTE.selectGroup)}>
          <Text variant="heading2">정산하기</Text>
          <ArrowRight
            width={theme.unit[20]}
            height={theme.unit[20]}
            fill={theme.color.semantic.orange.default}
          />
        </S.SelectGroupButton>
        <Text
          variant="body2R"
          color="semantic.text.inverse"
          style={{ display: 'inline-block', marginTop: theme.unit[4] }}
        >
          모임은 즐겁게, 정산은 깔끔하게!
          <br />
          모또만 믿고 맡겨줘!
        </Text>
        <S.DescriptionImg src={MainHamImg2} alt="" />
      </Flex>
      <S.BoxButtonWrapper>
        <S.BoxButton to={ROUTE.myLinks}>
          <Text variant="body1Sb" color="semantic.text.default">
            링크 관리
          </Text>
          <S.SmallImg src={LinkMain} alt="" />
        </S.BoxButton>
        <S.BoxButton to={ROUTE.paymentManagement}>
          <Text variant="body1Sb" color="semantic.text.default">
            입금 관리
          </Text>
          <S.SmallImg src={CardMain} alt="" />
        </S.BoxButton>
      </S.BoxButtonWrapper>
    </>
  );
}

function SettlementList() {
  const [settlementType, setSettlementType] =
    useState<SettlementType>('RECEIVE');
  const [sortToggle, setSortToggle] = useState<boolean>(false);
  const theme = useTheme();

  const handleSettlementTypeButtonClick = (type: SettlementType) => {
    if (settlementType === type) {
      return;
    }
    setSettlementType(type);
  };

  const handleSortOptionClick = () => {
    setSortToggle(!sortToggle);
  };

  const settlementList = sortToggle
    ? [...settlementListMock].reverse()
    : settlementListMock;

  return (
    <Flex direction="column" pt={16} flexGrow={1}>
      <S.SettlementTitle>진행 중인 정산</S.SettlementTitle>
      <Flex
        justifyContent="space-between"
        px={20}
        height={48}
        alignItems="center"
      >
        <Flex gap={8}>
          <S.SettlementButton
            selected={settlementType === 'RECEIVE'}
            onClick={() => handleSettlementTypeButtonClick('RECEIVE')}
          >
            완료된 정산
          </S.SettlementButton>
          <S.SettlementButton
            selected={settlementType === 'SEND'}
            onClick={() => handleSettlementTypeButtonClick('SEND')}
          >
            보낼 정산
          </S.SettlementButton>
        </Flex>
        {/** @Todo Select 컴포넌트 개발 후 변경 */}
        <Button variant="text" onClick={handleSortOptionClick}>
          <Text variant="body2R" color="semantic.text.subtle">
            {sortToggle ? '오래된순' : '최신순'}
          </Text>
          <Next
            width={theme.unit[24]}
            height={theme.unit[24]}
            style={{
              transform: `rotate(${sortToggle ? 180 : 0}deg)`,
              transition: 'transform 0.2s ease',
            }}
          />
        </Button>
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
          py={20}
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
          gap={20}
        >
          <S.NoSettlementImg src={CoinImg} alt="" />
          <Text variant="body2R" color="semantic.text.subtle">
            아직 진행중인 정산이 없어요.
          </Text>
        </Flex>
      )}
    </Flex>
  );
}

export default HomePage;

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
import { format } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import useGetSettlementList from '@/features/home/api/useGetSettlementList';
import type { SettlementSort, SettlementStatus } from '@/entities/group/model/group.type';

import Flex from '@/shared/ui/Flex';
import Button from '@/shared/ui/Button';
import Header from '@/shared/ui/Header';
import Chip from '@/shared/ui/Chip';
import * as S from './index.style';
import HomeExpenseItem from '../HomeExpenseItem';

type SettlementType = SettlementStatus;

export function MainHeader() {
  const theme = useTheme();
  return (
    <Header
      type="TitleCenter"
      leftButtonContent={
        <LogoIcon
          width={98}
          height={36}
          fill={theme.color.semantic.orange.default}
        />
      }
      // leftButtonOnClick={() => navigate(ROUTE.login)}
      rightButtonContent={
        <Flex gap={16}>
          {/** @Todo 알림 기능 개발 후 변경 */}
          <Bell width={24} height={24} />
          {/** @Todo 마이페이지로 이동하는 핸들러 추가 */}
          <Menu width={24} height={24} />
        </Flex>
      }
      bgColor="semantic.background.normal.alternative"
    />
  );
}

export function SettlementBanner() {
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

export function SettlementList() {
  const [settlementType, setSettlementType] =
    useState<SettlementType>('IN_PROGRESS');
  const [sort, setSort] = useState<SettlementSort>('LATEST');
  const theme = useTheme();

  const handleSettlementTypeButtonClick = (type: SettlementType) => {
    if (settlementType === type) {
      return;
    }
    setSettlementType(type);
  };

  const handleSortOptionClick = () => {
    setSort((prev) => (prev === 'LATEST' ? 'OLDEST' : 'LATEST'));
  };

  const { data } = useGetSettlementList(settlementType, sort);
  const settlementList = data ?? [];

  return (
    <Flex direction="column" pt={16} flexGrow={1}>
      <Flex pl={20} py={8}>
        <Text variant="heading2">정산 내역</Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        px={20}
        height={48}
        alignItems="center"
      >
        <Flex gap={8}>
          <Chip
            variant={settlementType === 'IN_PROGRESS' ? 'primary' : 'secondary'}
            onClick={() => handleSettlementTypeButtonClick('IN_PROGRESS')}
            label="진행 중인 정산"
          />
          <Chip
            variant={settlementType === 'COMPLETED' ? 'primary' : 'secondary'}
            onClick={() => handleSettlementTypeButtonClick('COMPLETED')}
            label="완료된 정산"
          />
        </Flex>
        {/** @Todo Select 컴포넌트 개발 후 변경 */}
        <Button variant="text" onClick={handleSortOptionClick}>
          <Text variant="body2R" color="semantic.text.subtle">
            {sort === 'OLDEST' ? '오래된순' : '최신순'}
          </Text>
          <Next
            width={theme.unit[24]}
            height={theme.unit[24]}
            style={{
              transform: `rotate(${sort === 'OLDEST' ? 180 : 0}deg)`,
              transition: 'transform 0.2s ease',
            }}
          />
        </Button>
      </Flex>
      {settlementList.length > 0 ? (
        <S.SettlementListWrapper>
          {settlementList.map((item) => (
            <HomeExpenseItem
              key={item.groupId}
              date={format(new Date(item.createdAt), 'yyyy년 M월 d일', {
                locale: ko,
              })}
              groupName={item.name}
              totalAmount={item.totalAmount}
              paidMember={item.completedMemberCount}
              totalMember={item.totalMemberCount}
            />
          ))}
        </S.SettlementListWrapper>
      ) : (
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

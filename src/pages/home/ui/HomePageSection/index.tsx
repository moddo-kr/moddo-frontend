import MainHamImg2 from '@/shared/assets/pngs/MainHamImg2.png';
import { ArrowRight, Menu, Next } from '@/shared/assets/svgs/icon';
import { useNavigate } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import { useState, useMemo } from 'react';
import CoinImg from '@/shared/assets/pngs/CoinImg.png';
import LinkMain from '@/shared/assets/pngs/link_main.png';
import CardMain from '@/shared/assets/pngs/card_main.png';
import useGetSettlementList from '@/features/home/api/useGetSettlementList';
import { groupSettlementsByDate } from '@/features/home/lib/groupSettlementsByDate';
import type {
  SettlementSort,
  SettlementStatus,
} from '@/entities/group/model/group.type';
import { LogoIcon } from '@/shared/assets/svgs/logo';
import { getToken } from '@/shared/design-system';

import {
  Header,
  TextButton,
  TabChipList,
  TabChip,
} from '@/shared/design-system/ui';
import * as S from './index.style';
import { SettlementDateSection } from '../SettlementDateSection';

type SettlementType = SettlementStatus;

export function MainHeader() {
  const navigate = useNavigate();
  return (
    <Header
      type="1depth"
      title={
        <LogoIcon width={98} height={36} fill={getToken('fg.primary.normal')} />
      }
      trailingIcon={<Menu width={24} height={24} />}
      trailingIconAriaLabel="마이페이지로 이동"
      onTrailingIconClick={() => navigate(ROUTE.my)}
    />
  );
}

export function SettlementBanner() {
  const navigate = useNavigate();
  return (
    <>
      <S.BannerCard>
        <S.SelectGroupButton onClick={() => navigate(ROUTE.selectGroup)}>
          <S.BannerActionLabel>정산하기</S.BannerActionLabel>
          <ArrowRight
            width="1.25rem"
            height="1.25rem"
            fill={getToken('fg.primary.normal')}
          />
        </S.SelectGroupButton>
        <S.BannerDescription>
          모임은 즐겁게, 정산은 깔끔하게!
          <br />
          모또만 믿고 맡겨줘!
        </S.BannerDescription>
        <S.DescriptionImg src={MainHamImg2} alt="" />
      </S.BannerCard>
      <S.BoxButtonWrapper>
        <S.BoxButton to={ROUTE.myLinks}>
          <S.BoxButtonLabel>링크 관리</S.BoxButtonLabel>
          <S.SmallImg src={LinkMain} alt="" />
        </S.BoxButton>
        <S.BoxButton to={ROUTE.paymentManagement}>
          <S.BoxButtonLabel>입금 관리</S.BoxButtonLabel>
          <S.SmallImg src={CardMain} alt="" />
        </S.BoxButton>
      </S.BoxButtonWrapper>
    </>
  );
}

type SettlementContentProps = {
  isLoading: boolean;
  isError: boolean;
  settlementList: NonNullable<ReturnType<typeof useGetSettlementList>['data']>;
  settlementType: SettlementType;
};

function SettlementContent({
  isLoading,
  isError,
  settlementList,
  settlementType,
}: SettlementContentProps) {
  const dateGroups = useMemo(
    () => groupSettlementsByDate(settlementList),
    [settlementList]
  );

  if (isLoading) {
    return (
      <S.SettlementEmptyState>
        <S.SettlementStatusMessage>
          정산 내역을 불러오는 중이에요.
        </S.SettlementStatusMessage>
      </S.SettlementEmptyState>
    );
  }
  if (isError) {
    return (
      <S.SettlementEmptyState>
        <S.SettlementStatusMessage>
          정산 내역을 불러오지 못했어요.
        </S.SettlementStatusMessage>
      </S.SettlementEmptyState>
    );
  }
  if (settlementList.length === 0) {
    return (
      <S.SettlementEmptyState>
        <S.NoSettlementImg src={CoinImg} alt="" />
        <S.SettlementStatusMessage>
          {settlementType === 'IN_PROGRESS'
            ? '아직 진행중인 정산이 없어요.'
            : '완료된 정산이 없어요.'}
        </S.SettlementStatusMessage>
      </S.SettlementEmptyState>
    );
  }

  return (
    <S.SettlementListWrapper>
      {dateGroups.map(({ date, items }) => (
        <SettlementDateSection key={date} date={date} items={items} />
      ))}
    </S.SettlementListWrapper>
  );
}

export function SettlementList() {
  const [settlementType, setSettlementType] =
    useState<SettlementType>('IN_PROGRESS');
  const [sort, setSort] = useState<SettlementSort>('LATEST');

  const handleSettlementTypeButtonClick = (type: SettlementType) => {
    if (settlementType === type) {
      return;
    }
    setSettlementType(type);
  };

  const handleSortOptionClick = () => {
    setSort((prev) => (prev === 'LATEST' ? 'OLDEST' : 'LATEST'));
  };

  const { data, isLoading, isError } = useGetSettlementList(
    settlementType,
    sort
  );
  const settlementList = data ?? [];

  return (
    <S.SettlementListContainer>
      <S.SectionHeadingRow>
        <S.SectionHeading>정산 내역</S.SectionHeading>
      </S.SectionHeadingRow>
      <S.FilterRow>
        <TabChipList
          activeValue={settlementType}
          onValueChange={(value) =>
            handleSettlementTypeButtonClick(value as SettlementType)
          }
        >
          <TabChip label="진행 중인 정산" value="IN_PROGRESS" />
          <TabChip label="완료된 정산" value="COMPLETED" />
        </TabChipList>
        {/** @Todo Select 컴포넌트 개발 후 변경 */}
        <TextButton onClick={handleSortOptionClick}>
          <S.SortLabel>{sort === 'OLDEST' ? '오래된순' : '최신순'}</S.SortLabel>
          <Next
            width="1.5rem"
            height="1.5rem"
            style={{
              transform: `rotate(${sort === 'OLDEST' ? 180 : 0}deg)`,
              transition: 'transform 0.2s ease',
            }}
          />
        </TextButton>
      </S.FilterRow>
      <SettlementContent
        isLoading={isLoading}
        isError={isError}
        settlementList={settlementList}
        settlementType={settlementType}
      />
    </S.SettlementListContainer>
  );
}

import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useTheme } from 'styled-components';
import { ArrowLeft, Crown } from '@/assets/svgs/icon';
import Button from '@/common/components/Button';
import Header from '@/common/components/Header';
import { TabsList, Tab } from '@/common/components/Tabs';
import Text from '@/common/components/Text';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import * as S from './index.styles';
import ExpenseTimeline from './components/ExpenseTimeline';
import CurvedProgressBar from '@/common/components/CurvedProgressBar';
import ModdoFace from '@/assets/pngs/moddoFace.png';
import { DollarCircle } from '@/assets/svgs/icon';

const MEMBER_TOTAL: number = 6;
const MEMBER_DONE: number = 3;
const TOTAL_MONEY: number = 120000;

function BillDetail() {
  const { unit } = useTheme();
  const [activeTab, setActiveTab] = useState('member');
  const { groupToken, groupData } = useLoaderData();
  // TODO : 필요하다면 useQuery의 initialData에 groupData를 넣어서 사용
  const theme = useTheme();
  const percentage = (MEMBER_DONE / MEMBER_TOTAL) * 100;
  const crownColor =
    MEMBER_DONE == MEMBER_TOTAL
      ? theme.color.primitive.base.white
      : theme.color.semantic.secondary.heavy;
  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={
          <>
            <ArrowLeft width={unit[24]} />
            <Text variant="body1R">{groupData.groupName}</Text>
          </>
        }
        rightButtonContent={
          <Text variant="body1R" color="semantic.text.subtle">
            관리
          </Text>
        }
      />
      <S.Content>
        <CurvedProgressBar percentage={percentage}>
          <S.ModdoImage src={ModdoFace}></S.ModdoImage>
          <S.ExpenseChip>
            <DollarCircle
              width="32"
              style={{ paddingRight: `${theme.unit[8]}` }}
            />
            <Text as="p" variant="body1Sb" color="semantic.orange.default">
              {MEMBER_DONE}
            </Text>
            {`/${MEMBER_TOTAL} 정산 완료`}
          </S.ExpenseChip>
          <Crown
            width={theme.unit[24]}
            fill={crownColor}
            style={{ position: 'absolute', top: '44.5%', right: '1.5%' }}
          />
          <S.TotalMoney>{TOTAL_MONEY.toLocaleString('ko-KR')}원</S.TotalMoney>
        </CurvedProgressBar>
        <S.TabListContainer>
          <TabsList activeTab={activeTab} setActiveTab={setActiveTab}>
            <Tab label="참여자별 정산" value="member" />
            <Tab label="전체 지출내역" value="expense" />
          </TabsList>
        </S.TabListContainer>
        {activeTab === 'expense' ? (
          <ExpenseTimeline groupToken={groupToken} />
        ) : (
          <div>참여자별 정산</div>
        )}
      </S.Content>
      <BottomButtonContainer>
        <Button>링크 공유하기</Button>
      </BottomButtonContainer>
    </>
  );
}

export default BillDetail;

import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/assets/svgs/icon';
import Button from '@/common/components/Button';
import Header from '@/common/components/Header';
import { TabsList, Tab } from '@/common/components/Tabs';
import Text from '@/common/components/Text';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';

import * as S from './index.styles';
import ExpenseTimeline from './components/ExpenseTimeline';

import ExpenseTimeHeader from './components/ExpenseTimeHeader';
import Divider from '@/common/components/Divider';

/** Mock 데이터 */
const MEMBER_TOTAL = 6 as number;
const MEMBER_DONE = 3 as number;

function BillDetail() {
  const { unit } = useTheme();
  const [activeTab, setActiveTab] = useState('member');
  const { groupToken, groupData } = useLoaderData();

  // TODO : 필요하다면 useQuery의 initialData에 groupData를 넣어서 사용
  const theme = useTheme();

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
        bgColor={theme.color.semantic.background.normal.alternative}
      />
      <S.Content>
        <ExpenseTimeHeader
          totalMember={MEMBER_TOTAL}
          paidMember={MEMBER_DONE}
        />
        <Divider />
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

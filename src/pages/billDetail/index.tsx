import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/assets/svgs/icon';
import Button from '@/common/components/Button';
import Header from '@/common/components/Header';
import { TabsList, Tab } from '@/common/components/Tabs';
import Text from '@/common/components/Text';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import Divider from '@/common/components/Divider';
import { useGetMemberExpenseDetails } from '@/common/queries/memberExpense/useGetMemberExpenseDetails';
import { ROUTE } from '@/common/constants/route';
import generateShareLink from '@/common/utils/generateShareLink';
import ExpenseTimeline from './components/ExpenseTimeline';
import CharacterBottomSheet from './components/CharacterBottomSheet';
import * as S from './index.styles';

import ExpenseTimeHeader from './components/ExpenseTimeHeader';
import ExpenseMembers from './components/ExpenseMembers';
import { StatusType } from './components/ExpenseTimeHeader/index.type';
import ShareButton from '../createBill/shareStep/components/ShareButton';

function BillDetail() {
  const { unit } = useTheme();
  const [activeTab, setActiveTab] = useState('member');
  const { groupToken, groupData } = useLoaderData();
  const [status, setStatus] = useState<StatusType>('pending');
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const theme = useTheme();
  const { data: memberExpenseDetails } = useGetMemberExpenseDetails(groupToken);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  let MEMBER_TOTAL = 0;
  let MEMBER_DONE = 0;

  if (memberExpenseDetails) {
    MEMBER_TOTAL = memberExpenseDetails.length;
    MEMBER_DONE = memberExpenseDetails.filter((member) => member.isPaid).length;
  }

  const shareLink = generateShareLink(groupToken);

  const handleBackToHome = () => {
    localStorage.removeItem('groupToken');
    navigate(ROUTE.home);
  };

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
        leftButtonOnClick={() => {
          navigate(ROUTE.home);
        }}
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
          onShareClick={() => setOpenBottomSheet(true)}
          status={status}
          setStatus={setStatus}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
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
          <ExpenseMembers groupToken={groupToken} status={status} />
        )}
      </S.Content>
      <BottomButtonContainer>
        {/* eslint-disable-next-line */}
        {MEMBER_TOTAL === MEMBER_DONE && status === 'pending' ? (
          <Button onClick={() => setIsChecked(false)}>정산 완료하기</Button>
        ) : status === 'success' ? (
          <Button onClick={handleBackToHome}>홈으로 돌아가기</Button>
        ) : (
          <ShareButton shareLink={shareLink} />
        )}
      </BottomButtonContainer>
      <CharacterBottomSheet
        open={openBottomSheet}
        setOpen={setOpenBottomSheet}
      />
    </>
  );
}

export default BillDetail;

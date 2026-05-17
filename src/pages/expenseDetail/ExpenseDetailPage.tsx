import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import Button from '@/shared/ui/Button';
import Header from '@/shared/ui/Header';
import Text from '@/shared/ui/Text';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import Divider from '@/shared/ui/Divider';
import generateShareLink from '@/shared/lib/generateShareLink';
import { ROUTE } from '@/shared/config/route';
import ShareButton from '@/shared/ui/ShareButton';
import CharacterBottomSheet from '@/features/character-management/ui/CharacterBottomSheet';
import { useGetGroupHeader } from '@/features/settlement-details/api/useGetGroupHeader';
import { TabsList, Tab } from './ui/Tabs';
import ExpenseTimeline from './ui/ExpenseTimeline';
import ExpenseTimeHeader from './ui/ExpenseTimeHeader';
import ExpenseMembers from './ui/ExpenseMembers';
import { StatusType } from './ui/ExpenseTimeHeader/index.type';
import * as S from './ExpenseDetailPage.styles';

function ExpenseDetailPage() {
  const { unit, color } = useTheme();
  const [activeTab, setActiveTab] = useState('member');
  const { groupToken, groupData } = useLoaderData();
  const [status, setStatus] = useState<StatusType>('pending');
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const { data: headerData, isLoading: isHeaderLoading } = useGetGroupHeader(
    groupToken,
    {
      // CHECK - API 문서에는 401 에러로 되어 있지만 실제로는 500 에러가 발생함
      // 모임의 참여자가 아닌 사용자가 모임 정보를 요청하는 경우
      // 401: () => {
      //   throw new BoundaryError({
      //     title: '접근할 수 없는 페이지예요',
      //     description: '참여한 모임의 정산만 확인할 수 있어요.',
      //   });
      // },
    },
    [401]
  );
  const memberTotal = headerData?.totalMemberCount ?? 0;
  const memberDone = headerData?.completedMemberCount ?? 0;
  const isAllMemberPaid = memberTotal > 0 && memberTotal === memberDone;

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
        bgColor={color.semantic.background.normal.alternative}
      />
      <S.Content>
        <ExpenseTimeHeader
          headerData={headerData}
          isLoading={isHeaderLoading}
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
        {isAllMemberPaid && status === 'pending' ? (
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

export default ExpenseDetailPage;

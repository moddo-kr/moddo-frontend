import { useEffect, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { Dialog, Divider, Header, Modal } from '@/shared/design-system/ui';
import Text from '@/shared/ui/Text';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import { useGetMemberExpenseDetails } from '@/features/expense-management/api/useGetMemberExpenseDetails';
import generateShareLink from '@/shared/lib/generateShareLink';
import { ROUTE } from '@/shared/config/route';
import CharacterBottomSheet from '@/features/character-management/ui/CharacterBottomSheet';
import useCreatePaymentRequest from '@/features/payment-management/api/useCreatePaymentRequest';
import { useGetGroupHeader } from '@/features/settlement-details/api/useGetGroupHeader';
import { showToast } from '@/shared/ui/Toast';
import { TabsList, Tab } from './ui/Tabs';
import ExpenseTimeline from './ui/ExpenseTimeline';
import ExpenseTimeHeader from './ui/ExpenseTimeHeader';
import ExpenseMembers from './ui/ExpenseMembers';
import { StatusType } from './ui/ExpenseTimeHeader/index.type';
import BottomAction from './ui/BottomAction';
import * as S from './ExpenseDetailPage.styles';

function ExpenseDetailPage() {
  const { unit, color } = useTheme();
  const [activeTab, setActiveTab] = useState('member');
  const { groupToken, groupData, myProfile } = useLoaderData();
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const { data: memberExpenseDetails } = useGetMemberExpenseDetails(groupToken);
  const { data: headerData } = useGetGroupHeader(groupToken, {}, [401]);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // TODO: GroupHeaderResponse에 completedAt 필드를 추가하여 서버에서 정산 완료 여부를 직접 내려받도록 개선 필요
  const derivedStatus = useMemo<StatusType>(() => {
    if (!headerData) return 'pending';

    const isExpired = new Date(headerData.deadline).getTime() < Date.now();
    if (isExpired) return 'failure';

    return 'pending';
  }, [headerData]);

  const [status, setStatus] = useState<StatusType>('pending');

  useEffect(() => {
    setStatus(derivedStatus);
  }, [derivedStatus]);
  const navigate = useNavigate();
  const { mutate: createPaymentRequest } = useCreatePaymentRequest();

  const handlePaymentRequest = () => {
    createPaymentRequest(groupToken, {
      onSuccess: () => {
        setIsPaymentModalOpen(false);
        showToast({
          type: 'success',
          content: '입금 확인 요청이 전송되었습니다.',
        });
      },
    });
  };

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
        type="default"
        headingIcon={<ArrowLeft width={unit[24]} />}
        headingLabel={groupData.groupName}
        headingIconAriaLabel="홈으로 이동"
        onHeadingIconClick={() => {
          navigate(ROUTE.home);
        }}
        trailingIcon={
          <Text variant="body1R" color="semantic.text.subtle">
            관리
          </Text>
        }
        bgColor={color.semantic.background.normal.alternative}
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
        <BottomAction
          status={status}
          myProfile={myProfile}
          memberTotal={MEMBER_TOTAL}
          memberDone={MEMBER_DONE}
          shareLink={shareLink}
          onSettleClick={() => setIsChecked(false)}
          onPaymentRequestClick={() => setIsPaymentModalOpen(true)}
          onBackToHome={handleBackToHome}
        />
      </BottomButtonContainer>
      <CharacterBottomSheet
        open={openBottomSheet}
        setOpen={setOpenBottomSheet}
      />
      <Modal
        open={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        ariaLabel={`${myProfile.name}님의 정산 입금을 알릴게요.`}
      >
        <Dialog
          title={
            <>
              <S.NameHighlight>{myProfile.name}</S.NameHighlight>
              {'님의\n정산 입금을 알릴게요.'}
            </>
          }
          description={`총무에게 입금 확인 요청 알림이 전송됩니다.\n입금을 완료했을 때만 눌러주세요.`}
          mainAction={{ label: '알림 보내기', onClick: handlePaymentRequest }}
          alternativeAction={{
            label: '취소',
            onClick: () => setIsPaymentModalOpen(false),
          }}
        />
      </Modal>
    </>
  );
}

export default ExpenseDetailPage;

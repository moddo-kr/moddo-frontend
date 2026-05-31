import { useEffect, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { PageLayout } from '@/shared/ui/PageLayout';
import {
  Dialog,
  Divider,
  Header,
  Modal,
  Tab,
  TabList,
  showToast,
} from '@/shared/design-system/ui';
import generateShareLink from '@/shared/lib/generateShareLink';
import { ROUTE } from '@/shared/config/route';
import CharacterBottomSheet from '@/features/character-management/ui/CharacterBottomSheet';
import useCreatePaymentRequest from '@/features/payment-management/api/useCreatePaymentRequest';
import { useGetGroupHeader } from '@/features/settlement-details/api/useGetGroupHeader';
import { useGetMemberExpenseDetails } from '@/features/expense-management/api/useGetMemberExpenseDetails';
import { getProfiles } from '@/entities/member/api/getProfiles';
import { getToken } from '@/shared/design-system';
import ExpenseTimeline from './ui/ExpenseTimeline';
import ExpenseTimeHeader from './ui/ExpenseTimeHeader';
import ExpenseMembers from './ui/ExpenseMembers';
import { StatusType } from './ui/ExpenseTimeHeader/index.type';
import BottomAction from './ui/BottomAction';
import * as S from './ExpenseDetailPage.styles';

function ExpenseDetailPage() {
  const [activeTab, setActiveTab] = useState('member');
  const { groupToken, groupData, myProfile } = useLoaderData();
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [isPaymentRequested, setIsPaymentRequested] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { data: headerData, isLoading: isHeaderLoading } = useGetGroupHeader(
    groupToken,
    {},
    [401]
  );
  const { data: memberExpenseDetails = [] } =
    useGetMemberExpenseDetails(groupToken);
  const memberTotal = memberExpenseDetails.length;
  const memberDone = memberExpenseDetails.filter(
    (member) => member.isPaid
  ).length;
  const isEveryMemberPaid = memberTotal > 0 && memberTotal === memberDone;
  const { data: profiles = [] } = useQuery({
    queryKey: ['profiles', groupToken],
    queryFn: () => getProfiles(groupToken),
  });
  const currentProfile =
    profiles.find((profile) => profile.id === myProfile.id) ?? myProfile;
  const bottomActionProfile =
    currentProfile.role === 'PARTICIPANT' && isPaymentRequested
      ? { ...currentProfile, isPaid: true }
      : currentProfile;

  const derivedStatus = useMemo<StatusType>(() => {
    if (!headerData) return 'pending';
    if (headerData.completedAt) return 'success';

    const isExpired = new Date(headerData.deadline).getTime() < Date.now();
    if (isExpired) return 'failure';

    return 'pending';
  }, [headerData]);

  const [status, setStatus] = useState<StatusType>('pending');

  useEffect(() => {
    setStatus((prevStatus) =>
      prevStatus === 'success' ? prevStatus : derivedStatus
    );
  }, [derivedStatus]);
  const navigate = useNavigate();
  const { mutate: createPaymentRequest } = useCreatePaymentRequest();

  const handlePaymentRequest = () => {
    createPaymentRequest(groupToken, {
      onSuccess: () => {
        setIsPaymentRequested(true);
        setIsPaymentModalOpen(false);
        showToast({
          type: 'success',
          content: '입금 확인 요청이 전송되었습니다.',
        });
      },
    });
  };

  const shareLink = generateShareLink(groupToken);

  const handleBackToHome = () => {
    localStorage.removeItem('groupToken');
    navigate(ROUTE.home);
  };

  return (
    <PageLayout $bg="neutral">
      <Header
        type="default"
        headingIcon={
          <ArrowLeft width="1.5rem" color={getToken('fg.alternative')} />
        }
        headingLabel={groupData.groupName}
        headingIconAriaLabel="홈으로 이동"
        onHeadingIconClick={() => {
          navigate(ROUTE.home);
        }}
        // trailingIcon={<S.ManageLabel>관리</S.ManageLabel>} // TODO : 추가를 논의중인 기능이기 때문에 삭제하지 않고 주석 처리함
      />
      <S.Content>
        <ExpenseTimeHeader
          headerData={headerData}
          isLoading={isHeaderLoading}
          totalMember={memberTotal}
          paidMember={memberDone}
          isEveryMemberPaid={isEveryMemberPaid}
          onShareClick={() => setOpenBottomSheet(true)}
          status={status}
          setStatus={setStatus}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <Divider />
        <S.BottomArea>
          <S.TabListContainer>
            <TabList activeTab={activeTab} onTabChange={setActiveTab}>
              <Tab label="참여자별 정산" value="member" />
              <Tab label="전체 지출내역" value="expense" />
            </TabList>
          </S.TabListContainer>
          {activeTab === 'expense' ? (
            <ExpenseTimeline groupToken={groupToken} />
          ) : (
            <ExpenseMembers groupToken={groupToken} status={status} />
          )}
        </S.BottomArea>
      </S.Content>
      <BottomAction
        status={status}
        myProfile={bottomActionProfile}
        isEveryMemberPaid={isEveryMemberPaid}
        shareLink={shareLink}
        onSettleClick={() => setIsChecked(false)}
        onPaymentRequestClick={() => setIsPaymentModalOpen(true)}
        onBackToHome={handleBackToHome}
      />
      <CharacterBottomSheet
        open={openBottomSheet}
        setOpen={setOpenBottomSheet}
      />
      <Modal
        open={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        ariaLabel={`${currentProfile.name}님의 정산 입금을 알릴게요.`}
      >
        <Dialog
          title={
            <>
              <S.NameHighlight>{currentProfile.name}</S.NameHighlight>
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
    </PageLayout>
  );
}

export default ExpenseDetailPage;

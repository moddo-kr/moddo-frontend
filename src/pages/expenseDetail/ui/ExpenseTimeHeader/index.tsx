import React, { useEffect, useRef, useState } from 'react';
import { Copy, DollarCircle } from '@/shared/assets/svgs/icon';
import copyClipboard from '@/shared/lib/copyClipboard';
import {
  DescriptionField,
  Dialog,
  IconButton,
  Modal,
  showToast,
} from '@/shared/design-system/ui';
import { getToken } from '@/shared/design-system';
import { GroupHeaderResponse } from '@/entities/group/model/group.type';
import { CurvedProgressBar } from '../CurvedProgressBar';
import { StatusContent, StatusType } from './index.type';
import * as S from './index.style';
import { getFormatDate } from './lib/getFormatDate';

interface ExpenseTimeHeaderProps {
  headerData?: GroupHeaderResponse;
  isLoading: boolean;
  totalMember: number;
  paidMember: number;
  isEveryMemberPaid: boolean;
  onShareClick: () => void;
  status: StatusType;
  setStatus: (status: StatusType) => void;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

function ExpenseTimeHeader({
  headerData,
  isLoading,
  totalMember,
  paidMember,
  isEveryMemberPaid,
  onShareClick,
  status,
  setStatus,
  isChecked,
  setIsChecked,
}: ExpenseTimeHeaderProps) {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isBubble, setIsBubble] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 타이머 업데이트 함수
  const updateTimer = (timeDifference: number) => {
    const newHours = Math.floor(timeDifference / (1000 * 60 * 60));
    const newMinutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const newSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
  };

  // 상태 업데이트 함수
  const updateStatus = (statusValue: StatusType) => {
    setStatus(statusValue);
    setIsBubble(true);
  };

  // 외부에서 호출할 수 있는 stopTimer 함수
  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // 타이머 멈추기
    }
  };

  // TODO: isChecked를 sessionStorage/localStorage로 관리하여 새로고침 시에도 모달이 다시 뜨지 않도록 개선 필요 (groupToken별 키 사용)
  // 모든 멤버가 입금 완료된 "순간"에만 모달 표시
  useEffect(() => {
    if (isEveryMemberPaid && !isChecked) {
      setIsModalOpen(true);
      setIsChecked(true);
    }
  }, [isEveryMemberPaid, isChecked, setIsChecked]);

  useEffect(() => {
    if (!headerData || status !== 'pending') return () => {};

    intervalRef.current = setInterval(() => {
      const now = new Date();
      const endDate = new Date(headerData.deadline);
      const timeDifference = endDate.getTime() - now.getTime();
      if (timeDifference <= 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        updateStatus('failure');
        stopTimer();
      } else {
        updateTimer(timeDifference);
      }
    }, 1000);

    return () => stopTimer(); // 컴포넌트 언마운트 시 타이머 멈추기
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerData, status]);

  const handleModalButtonClick = () => {
    stopTimer();
    setIsModalOpen(false);
    updateStatus('success');
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    onShareClick();
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (!headerData) {
    return null;
  }

  /** 상수 정의 */

  const percentage = totalMember > 0 ? (paidMember / totalMember) * 100 : 0;
  const endDate = new Date(headerData.deadline);
  const accountFormat = `${headerData.bank} ${headerData.accountNumber}`; // 신한 110123456789

  const handleModdoButtonClick = () => {
    if (status === 'success') {
      onShareClick();
      return;
    }
    if (status === 'failure') {
      return;
    }
    setIsBubble(true);
    setTimeout(() => {
      setIsBubble(false);
    }, 2000);
  };

  const handleCopyButtonClick = async (text: string) => {
    const isCopied = await copyClipboard(text);
    if (isCopied) {
      showToast({ type: 'success', content: '계좌번호가 복사되었습니다.' });
    }
  };

  return (
    <S.Wrapper>
      <DescriptionField
        title={
          <S.DescriptionTitle>
            <S.DeadlineDate>{getFormatDate(endDate)}까지</S.DeadlineDate>
            <S.SettlementPrompt>정산을 완료해주세요</S.SettlementPrompt>
          </S.DescriptionTitle>
        }
        sub={
          <S.AccountRow>
            정산 계좌: {accountFormat}
            <IconButton
              aria-label="계좌번호 복사"
              onClick={() => handleCopyButtonClick(accountFormat)}
            >
              <Copy
                width={16}
                height={16}
                color={getToken('fill.inverse.alternative')}
              />
            </IconButton>
          </S.AccountRow>
        }
      />
      <CurvedProgressBar percentage={percentage}>
        <S.ModdoButton onClick={handleModdoButtonClick}>
          <S.ModdoImage src={StatusContent[status].image} />
          {isBubble && <S.Bubble>{StatusContent[status].message}</S.Bubble>}
        </S.ModdoButton>
        <S.ExpenseChip>
          <DollarCircle width={24} height={24} color="#FECB3F" />
          <S.SettlementStatusText>
            <S.PaidMemberCount>{paidMember}</S.PaidMemberCount>
            {`/${totalMember} 정산 완료`}
          </S.SettlementStatusText>
        </S.ExpenseChip>
        <S.TotalMoney>
          {(headerData?.totalAmount ?? 0).toLocaleString('ko-KR')}원
        </S.TotalMoney>
      </CurvedProgressBar>
      <S.TimerSection>
        <S.DeadlineLabel>정산 마감까지 남은 시간</S.DeadlineLabel>
        <S.TimeBox>
          <S.Timer>
            {([hours, minutes, seconds] as number[]).map((time, index, arr) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                <S.TimerDigit $isFailure={status === 'failure'}>
                  {String(time).padStart(2, '0')}
                </S.TimerDigit>
                {index < arr.length - 1 && <S.TimeSep>:</S.TimeSep>}
              </React.Fragment>
            ))}
            {['시', '분', '초'].map((label, idx) => (
              <S.TimerUnit key={label} $gridColumn={idx * 2 + 1}>
                {label}
              </S.TimerUnit>
            ))}
          </S.Timer>
        </S.TimeBox>
      </S.TimerSection>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ariaLabel="모임원이 모두 입금했어요!"
      >
        <Dialog
          title="모임원이 모두 입금했어요!"
          description="정산을 완료하고 캐릭터를 확인하시겠어요?"
          mainAction={{ label: '완료', onClick: handleModalButtonClick }}
          alternativeAction={{
            label: '미완료',
            onClick: () => setIsModalOpen(false),
          }}
        />
      </Modal>
    </S.Wrapper>
  );
}

export default ExpenseTimeHeader;

import React, { useEffect, useRef, useState } from 'react';
import CurvedProgressBar from '@/common/components/CurvedProgressBar';
import DescriptionField from '@/common/components/DescriptionField';
import { Flex } from '@chakra-ui/react';
import { Copy, Crown, DollarCircle } from '@/assets/svgs/icon';
import { useTheme } from 'styled-components';
import Text from '@/common/components/Text';
import { useGetGroupHeader } from '@/common/queries/group/useGetGroupHeader'; //
import { useLoaderData } from 'react-router';
import Modal from '@/common/components/Modal';
import copyClipboard from '@/common/utils/copyClipboard';
import Button from '@/common/components/Button';
import { showToast } from '@/common/components/Toast';
import { BoundaryError } from '@/common/types/error.type';
import { getFormatDate } from '../../utils/getFormatDate';
import { StatusContent, StatusType } from './index.type';
import * as S from './index.style';

interface ExpenseTimeHeaderProps {
  totalMember: number;
  paidMember: number;
  onShareClick: () => void;
  status: StatusType;
  setStatus: (status: StatusType) => void;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

function ExpenseTimeHeader({
  totalMember,
  paidMember,
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
  const { groupToken } = useLoaderData();
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /** API 호출 관련 로직 */
  const { data: headerData, isLoading } = useGetGroupHeader(
    groupToken,
    {
      // CHECK - API 문서에는 401 에러로 되어 있지만 실제로는 500 에러가 발생함
      // 모임의 참여자가 아닌 사용자가 모임 정보를 요청하는 경우
      401: () => {
        throw new BoundaryError({
          title: '접근할 수 없는 페이지예요',
          description: '참여한 모임의 정산만 확인할 수 있어요.',
        });
      },
    },
    [401]
  );

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

  useEffect(() => {
    if (!headerData) return () => {};

    intervalRef.current = setInterval(() => {
      const now = new Date();
      const endDate = new Date(headerData!.deadline);
      const timeDifference = endDate.getTime() - now.getTime();
      if (timeDifference <= 0) {
        if (status === 'success') return;
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        updateStatus('failure');
        stopTimer();
      } else {
        if (totalMember === paidMember && !isChecked) {
          setIsModalOpen(true);
          setIsChecked(true);
        }
        updateTimer(timeDifference);
      }
    }, 1000);

    return () => stopTimer(); // 컴포넌트 언마운트 시 타이머 멈추기
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerData, totalMember, paidMember, isChecked]);

  const handleModalButtonClick = () => {
    setIsModalOpen(false);
    updateStatus('success');
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    onShareClick();
    stopTimer(); // 버튼 클릭 시 타이머 멈추기
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (!headerData) {
    return null;
  }

  /** 상수 정의 */

  const percentage = (paidMember / totalMember) * 100;
  const crownColor =
    paidMember === totalMember
      ? theme.color.primitive.base.white
      : theme.color.semantic.secondary.heavy;
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
          <Flex direction="column">
            <Text color="semantic.primary.default" variant="heading2">
              {getFormatDate(endDate)}까지
            </Text>
            <Text variant="heading2">정산을 완료해주세요</Text>
          </Flex>
        }
        sub={
          <Flex gap={theme.unit[4]} alignItems="center">
            정산 계좌: {accountFormat}
            <Button
              variant="text"
              onClick={() => handleCopyButtonClick(accountFormat)}
            >
              <Copy width={theme.unit[16]} height={theme.unit[16]} />
            </Button>
          </Flex>
        }
        bgColor="semantic.background.normal.alternative"
      />
      <div style={{ height: `${theme.unit[20]}` }} />
      <CurvedProgressBar percentage={percentage}>
        <S.ModdoButton onClick={handleModdoButtonClick}>
          <S.ModdoImage src={StatusContent[status].image} />
          {isBubble && <S.Bubble>{StatusContent[status].message}</S.Bubble>}
        </S.ModdoButton>
        <S.ExpenseChip>
          <DollarCircle
            width="32"
            style={{ paddingRight: `${theme.unit[8]}` }}
          />
          <Text as="p" variant="body1Sb" color="semantic.primary.default">
            {paidMember}
          </Text>
          {`/${totalMember} 정산 완료`}
        </S.ExpenseChip>
        <Crown
          width={theme.unit[24]}
          fill={crownColor}
          style={{ position: 'absolute', top: '44.5%', right: '1.5%' }}
        />
        <S.TotalMoney>
          {(headerData?.totalAmount ?? 0).toLocaleString('ko-KR')}원
        </S.TotalMoney>
      </CurvedProgressBar>
      <Flex
        direction="column"
        pl={theme.unit[20]}
        pr={theme.unit[20]}
        gap={theme.unit[12]}
      >
        <Text variant="body1Sb" color="semantic.text.strong">
          정산 마감까지 남은 시간
        </Text>
        <S.TimeBox>
          <Flex direction="column" width={174} alignItems="center">
            <Flex justifyContent="center" alignItems="center">
              {([hours, minutes, seconds] as number[]).map(
                (time, index, arr) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <React.Fragment key={index}>
                    <Text
                      variant="heading1"
                      color={
                        status === 'failure'
                          ? 'semantic.state.danger'
                          : 'semantic.text.strong'
                      }
                    >
                      {String(time).padStart(2, '0')}
                    </Text>
                    {index < arr.length - 1 && <S.TimeSep>:</S.TimeSep>}
                  </React.Fragment>
                )
              )}
            </Flex>
            <Flex justifyContent="space-between" width="100%" pl={2.5} pr={2.5}>
              {['시', '분', '초'].map((label) => (
                <Text key={label} color="semantic.text.subtle">
                  {label}
                </Text>
              ))}
            </Flex>
          </Flex>
        </S.TimeBox>
      </Flex>
      <Modal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        variant="default"
        title="모임원이 모두 입금했어요!"
        subscribe="정산을 완료하고 캐릭터를 확인하시겠어요?"
        cancel="미완료"
        submit="완료"
        onCancel={() => setIsModalOpen(false)}
        onSubmit={handleModalButtonClick}
      />
    </S.Wrapper>
  );
}

export default ExpenseTimeHeader;

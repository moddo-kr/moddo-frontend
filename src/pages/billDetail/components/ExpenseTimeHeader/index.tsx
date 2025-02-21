import React, { useEffect, useState } from 'react';
import CurvedProgressBar from '@/common/components/CurvedProgressBar';

import DescriptionField from '@/common/components/DescriptionField';
import { Flex } from '@chakra-ui/react';
import { Copy, Crown, DollarCircle } from '@/assets/svgs/icon';
import { useTheme } from 'styled-components';
import Text from '@/common/components/Text';
import { useGetGroupHeader } from '@/common/queries/group/useGetGroupHeader'; //
import { useParams } from 'react-router';
import * as S from './index.style';
import { StatusContent, StatusType } from './index.type';
import { getFormatDate } from '../../utils/getFormatDate';

/** mockData */
// const TOTAL_MONEY = 120000;
// const END_DATE = new Date('2025-02-21T02:10:05.448428');
// const BankNumber = '11012341234' as string;

interface ExpenseTimeHeaderProps {
  totalMember: number;
  paidMember: number;
  onShareClick: () => void;
}

function ExpenseTimeHeader({
  totalMember,
  paidMember,
  onShareClick,
}: ExpenseTimeHeaderProps) {
  const [status, setStatus] = useState<StatusType>('pending');
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isBubble, setIsBubble] = useState<boolean>(false);
  const { groupToken } = useParams<{ groupToken: string }>();
  const theme = useTheme();
  /** API 호출 관련 로직 */
  const {
    data: headerData,
    isLoading,
    isError,
  } = useGetGroupHeader(groupToken!);

  /** @Todo 커스텀 훅으로 분리 */
  useEffect(() => {
    if (!headerData) return () => {};

    const interval = setInterval(() => {
      const now = new Date();
      const endDate = new Date(headerData!.deadline);
      const timeDifference = endDate.getTime() - now.getTime();
      // 타이머 종료
      if (timeDifference <= 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        if (totalMember === paidMember) {
          setStatus('success');
          setIsBubble(true);
        } else {
          setStatus('failure');
          setIsBubble(true);
        }
        clearInterval(interval);
      } else {
        const newHours = Math.floor(timeDifference / (1000 * 60 * 60));
        const newMinutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const newSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setHours(newHours);
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerData]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError || !headerData) {
    return <div>error...</div>;
  }

  /** 상수 정의 */

  const percentage = (paidMember / totalMember) * 100;
  const crownColor =
    paidMember === totalMember
      ? theme.color.primitive.base.white
      : theme.color.semantic.secondary.heavy;
  const endDate = new Date(headerData.deadline);

  const handleModdoButtonClick = () => {
    if (status === 'success') {
      onShareClick();
      return;
    }
    setIsBubble(true);
    setTimeout(() => {
      setIsBubble(false);
    }, 2000);
  };

  return (
    <S.Wrapper>
      <DescriptionField
        title={
          <Flex direction="column">
            <Text color="semantic.orange.default" variant="heading2">
              {getFormatDate(endDate)}까지
            </Text>
            <Text variant="heading2">정산을 완료해주세요</Text>
          </Flex>
        }
        sub={
          <Flex gap={theme.unit[4]} alignItems="center">
            정산 계좌: {headerData.accountNumber}
            <Copy width={theme.unit[16]} height={theme.unit[16]} />
          </Flex>
        }
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
          <Text as="p" variant="body1Sb" color="semantic.orange.default">
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
    </S.Wrapper>
  );
}

export default ExpenseTimeHeader;

import { useEffect, useState } from 'react';
import CurvedProgressBar from '@/common/components/CurvedProgressBar';

import DescriptionField from '@/common/components/DescriptionField';
import { Flex } from '@chakra-ui/react';
import { Copy, Crown, DollarCircle } from '@/assets/svgs/icon';
import { useTheme } from 'styled-components';
import Text from '@/common/components/Text';
import * as S from './index.style';
import { StatusContent, StatusType } from './index.type';
import React from 'react';

const MEMBER_TOTAL = 6 as number;
const MEMBER_DONE = 3 as number;
const TOTAL_MONEY = 120000;
const END_DATE = new Date('2025-02-21T02:10:05.448428');
const BankNumber = '11012341234' as string;

function ExpenseTimeHeader() {
  const [status, setStatus] = useState<StatusType>('pending');
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isBubble, setIsBubble] = useState<boolean>(false);

  const theme = useTheme();
  const percentage = (MEMBER_DONE / MEMBER_TOTAL) * 100;
  const crownColor =
    MEMBER_DONE === MEMBER_TOTAL
      ? theme.color.primitive.base.white
      : theme.color.semantic.secondary.heavy;

  const getFormatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // "MM-DD HH:mm" 형식으로 반환
    return `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  /** @Todo 커스텀 훅으로 분리 */
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = END_DATE.getTime() - now.getTime();
      // 타이머 종료
      if (timeDifference <= 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        if (MEMBER_TOTAL === MEMBER_DONE) {
          setStatus('success');
          setIsBubble(true);
        } else {
          setStatus('failure');
          setIsBubble(true);
        }
        clearInterval(interval);
      } else {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleModdoButtonClick = () => {
    /** @Todo success 시의 action 추가 정의 */
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
              {getFormatDate(END_DATE)}까지
            </Text>
            <Text variant="heading2">정산을 완료해주세요</Text>
          </Flex>
        }
        sub={
          <Flex gap={theme.unit[4]} alignItems="center">
            정산 계좌: {BankNumber}
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
      <Flex
        direction={'column'}
        pl={theme.unit[20]}
        pr={theme.unit[20]}
        gap={theme.unit[12]}
      >
        <Text variant="body1Sb" color="semantic.text.strong">
          정산 마감까지 남은 시간
        </Text>
        <S.TimeBox>
          <Flex direction="column" width={174} alignItems={'center'}>
            <Flex justifyContent="center" alignItems="center">
              {([hours, minutes, seconds] as number[]).map(
                (time, index, arr) => (
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
            <Flex justifyContent="space-between" width="100%" pl={3} pr={3}>
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

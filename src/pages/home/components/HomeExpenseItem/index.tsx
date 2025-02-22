import { DollarCircle } from '@/assets/svgs/icon';
import { useTheme } from 'styled-components';
import Text from '@/common/components/Text';
import DefaultProgressBar from '@/common/components/DefaultProgressBar';
import * as S from './index.style';

interface HomeExpenseItemProps {
  date: string;
  groupName: string;
  totalAmount: number;
  paidMember: number;
  totalMember: number;
}

function HomeExpenseItem({
  date,
  groupName,
  totalAmount,
  paidMember,
  totalMember,
}: HomeExpenseItemProps) {
  const theme = useTheme();
  const percentage = (paidMember / totalMember) * 100;

  return (
    <S.Wrapper>
      <Text variant="body1Sb" color="semantic.text.default">
        {date}
      </Text>
      <S.Container>
        <S.TextWrapper>
          <Text variant="body1R" color="semantic.text.default">
            {groupName}
          </Text>
          <Text variant="heading2" color="semantic.text.default">
            {totalAmount.toLocaleString()}원
          </Text>
        </S.TextWrapper>
        <S.ProgressBarWrapper>
          <DefaultProgressBar percentage={percentage} />
          <S.ExpenseProgress>
            <DollarCircle
              width={`${theme.unit[28]}`}
              style={{ paddingRight: `${theme.unit[4]}` }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                fontSize: `${theme.unit[14]}`,
              }}
            >
              <p style={{ color: `${theme.color.semantic.orange.default}` }}>
                {paidMember}
              </p>
              {`/${totalMember} 정산 완료`}
            </div>
          </S.ExpenseProgress>
        </S.ProgressBarWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default HomeExpenseItem;

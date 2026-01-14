import { DollarCircle } from '@/shared/assets/svgs/icon';
import { useTheme } from 'styled-components';
import Text from '@/shared/ui/Text';
import Flex from '@/shared/ui/Flex';
import DefaultProgressBar from '../DefaultProgressBar';
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
            <Flex>
              <Text color="semantic.orange.default" variant="body2Sb">
                {paidMember}
              </Text>
              <Text variant="body2Sb" color="semantic.text.subtle">
                {`/${totalMember} 정산 완료`}
              </Text>
            </Flex>
          </S.ExpenseProgress>
        </S.ProgressBarWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default HomeExpenseItem;

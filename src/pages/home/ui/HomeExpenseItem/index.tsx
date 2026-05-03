import { DollarCircle } from '@/shared/assets/svgs/icon';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router';
import Text from '@/shared/ui/Text';
import Flex from '@/shared/ui/Flex';
import DefaultProgressBar from '../DefaultProgressBar';
import * as S from './index.style';

interface HomeExpenseItemProps {
  date: string;
  groupCode: string;
  groupName: string;
  totalAmount: number;
  paidMember: number;
  totalMember: number;
}

function HomeExpenseItem({
  date,
  groupCode,
  groupName,
  totalAmount,
  paidMember,
  totalMember,
}: HomeExpenseItemProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const percentage = (paidMember / totalMember) * 100;

  // TODO: 디자이너 확인 후 클릭 시 정산 상세 페이지 이동 UX 확정 필요
  return (
    <S.Wrapper
      onClick={() => navigate(`/expense-detail/${groupCode}`)}
      style={{ cursor: 'pointer' }}
    >
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

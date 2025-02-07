import { VStack } from '@chakra-ui/react';
import useGetAllExpense from './hooks/useGetAllExpense';
import getTotalExpense from '../utils/getTotalExpense';
import * as S from './index.styles';
import ExpenseCardList from './components/ExpenseCardList';

const DUMMY_MEET_ID = 1;

function ConfirmStep() {
  // TODO : meetId를 알아내는 로직이 필요함
  const { data, isLoading } = useGetAllExpense(DUMMY_MEET_ID);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.expenses) {
    return <div>지출 내역이 없습니다.</div>;
  }

  return (
    <>
      <VStack align="flex-start" gap="1.5rem">
        {/* TODO : VStack: 정산 시작 step 공통 레이아웃 적용 전 임시 레이아웃 */}
        <S.Header>
          <S.HeaderButton>지출 추가</S.HeaderButton>
        </S.Header>
        <S.TopWrapper>
          <S.TopMessage>{`지출 내역을\n확인해주세요`}</S.TopMessage>
        </S.TopWrapper>
        <S.TotalExpenseWrapper>
          <S.TotalExpense>총 지출 금액</S.TotalExpense>
          <S.TotalExpenseAmount>
            {getTotalExpense(data.expenses).toLocaleString()}원
          </S.TotalExpenseAmount>
        </S.TotalExpenseWrapper>
        <ExpenseCardList expenses={data.expenses} />
      </VStack>
      <S.BottomButton type="button">확인했어요</S.BottomButton>
    </>
  );
}

export default ConfirmStep;

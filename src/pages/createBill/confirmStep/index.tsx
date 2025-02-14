import { ArrowLeft } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import ExpenseCardList from './components/ExpenseCardList';
import useGetAllExpense from './hooks/useGetAllExpense';
import getTotalExpense from '../utils/getTotalExpense';
import { BillContext } from '../types/billContext.type';
import * as S from './index.styles';
import { Expense } from '../types/expense.type';

interface ConfirmStepProps extends BaseFunnelStepComponentProps<BillContext> {}

function ConfirmStep({
  moveToNextStep,
  moveToPreviousStep,
  moveToStep,
}: ConfirmStepProps) {
  // TODO : groupToken 사용 방법 적용 필요함
  const { data, isLoading } = useGetAllExpense('group-token');

  const moveToEditStep = (initialExpense: Expense) => {
    moveToStep?.('EDIT_EXPENSE', { initialExpense });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.expenses) {
    return <div>지출 내역이 없습니다.</div>;
  }

  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={<ArrowLeft width="1.5rem" />}
        leftButtonOnClick={moveToPreviousStep}
        rightButtonContent={<S.AddExpenseButton>지출 추가</S.AddExpenseButton>}
        rightButtonOnClick={() => moveToStep?.('ADD_EXPENSE')}
      />
      <S.TopWrapper>
        <S.TopMessage>{`지출 내역을\n확인해주세요`}</S.TopMessage>
      </S.TopWrapper>
      <S.TotalExpenseWrapper>
        <S.TotalExpense>누적 금액</S.TotalExpense>
        <S.TotalExpenseAmount>
          {getTotalExpense(data.expenses).toLocaleString()}원
        </S.TotalExpenseAmount>
      </S.TotalExpenseWrapper>
      <ExpenseCardList
        expenses={data.expenses}
        moveToEditStep={moveToEditStep}
      />
      <S.ButtonWrapper>
        <S.BottomButton
          type="button"
          onClick={() => {
            moveToNextStep?.();
          }}
        >
          확인했어요
        </S.BottomButton>
      </S.ButtonWrapper>
    </>
  );
}

export default ConfirmStep;

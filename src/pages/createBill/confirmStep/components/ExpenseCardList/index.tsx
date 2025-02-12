import { Dispatch, SetStateAction } from 'react';
import { Expense } from '@/pages/createBill/types/expense.type';
import ExpenseCard from '../ExpenseCard';
import * as S from './index.styles';

interface ExpenseCardListProps {
  expenses: Expense[];
  setMode: Dispatch<SetStateAction<'VIEW' | 'EDIT'>>;
  moveToNextStep?: () => void;
}

function ExpenseCardList({
  expenses,
  setMode,
  moveToNextStep,
}: ExpenseCardListProps) {
  return (
    <>
      <S.CardListContainer>
        {expenses.map((expense, index) => (
          <ExpenseCard key={expense.id} index={index} {...expense} />
        ))}
        <S.ChangeOrderButton
          type="button"
          onClick={() => {
            setMode('EDIT');
          }}
        >
          순서 바꾸기
        </S.ChangeOrderButton>
      </S.CardListContainer>
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

export default ExpenseCardList;

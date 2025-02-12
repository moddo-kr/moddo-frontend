import { Expense } from '@/pages/createBill/types/expense.type';
import ExpenseCard from '../ExpenseCard';
import * as S from './index.styles';

interface ExpenseCardListProps {
  expenses: Expense[];
}

function ExpenseCardList({ expenses }: ExpenseCardListProps) {
  return (
    <S.CardListContainer>
      {expenses.map((expense, index) => (
        <ExpenseCard key={expense.id} index={index} {...expense} />
      ))}
    </S.CardListContainer>
  );
}

export default ExpenseCardList;

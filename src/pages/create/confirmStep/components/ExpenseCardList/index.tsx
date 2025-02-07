import { Expense } from '@/pages/create/types/expense.type';
import ExpenseCard from '../ExpenseCard';

interface ExpenseCardListProps {
  expenses: Expense[];
}

function ExpenseCardList({ expenses }: ExpenseCardListProps) {
  // TODO : 순서 바꾸기 기능 추가 예정
  return (
    <>
      {expenses.map((expense, index) => (
        <ExpenseCard key={expense.id} index={index} {...expense} />
      ))}
    </>
  );
}

export default ExpenseCardList;

import { Expense } from '@/pages/createBill/types/expense.type';

interface EditOrderListProps {
  expenses: Expense[];
  returnToViewMode: () => void;
}

function EditOrderList({ expenses, returnToViewMode }: EditOrderListProps) {
  return (
    <div>
      {expenses.map((expense, index) => (
        <div key={expense.id}>
          <div>{expense.amount}</div>
        </div>
      ))}
    </div>
  );
}

export default EditOrderList;

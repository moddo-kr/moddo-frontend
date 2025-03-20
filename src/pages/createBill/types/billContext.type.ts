import { SingleExpenseForm } from './expense.type';

export interface BillContext {
  id?: number; // 지출을 수정하기 위한 id
  initialExpense?: SingleExpenseForm; // 수정할 지출 정보
}

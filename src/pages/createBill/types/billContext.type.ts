import { SingleExpenseForm } from './expense.type2';

export interface BillContext {
  id?: number; // 지출을 수정하기 위한 id
  initialExpense?: SingleExpenseForm; // 수정할 지출 정보
}

/** Context 이동용 타입 - 모든 필드가 필수 */
export type BillContextRequired = Required<BillContext>;

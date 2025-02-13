import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Drag } from '@/assets/svgs/icon';
import { Expense } from '@/pages/createBill/types/expense.type';
import ExpenseCard from '../ExpenseCard';
import * as S from './index.styles';

interface EditOrderItemProps extends Expense {
  index: number;
}

function EditOrderItem({
  index,
  amount,
  content,
  date,
  memberExpenses,
  id,
}: EditOrderItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <S.DraggableContainer ref={setNodeRef} style={style}>
      <S.DraggableButton {...listeners} {...attributes}>
        <Drag width="1.5rem" />
      </S.DraggableButton>
      <ExpenseCard
        id={id}
        index={index}
        amount={amount}
        content={content}
        date={date}
        memberExpenses={memberExpenses}
        readonly
      />
    </S.DraggableContainer>
  );
}

export default EditOrderItem;

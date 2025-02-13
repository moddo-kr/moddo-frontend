import { Dispatch, SetStateAction, useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  useDroppable,
  useSensors,
  useSensor,
  TouchSensor,
  MouseSensor,
} from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { Expense } from '@/pages/createBill/types/expense.type';
import EditOrderItem from '../EditOrderItem';
import * as S from './index.styles';

interface EditOrderListProps {
  initialExpenses: Expense[];
  setMode: Dispatch<SetStateAction<'VIEW' | 'EDIT'>>;
}

function EditOrderList({ initialExpenses, setMode }: EditOrderListProps) {
  const [expenseList, setExpenseList] = useState<Expense[]>(initialExpenses);
  const sensors = useSensors(useSensor(TouchSensor), useSensor(MouseSensor));
  const { setNodeRef } = useDroppable({
    id: 'expense-list',
  });

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const overId = over?.id;
    if (!overId) {
      return;
    }
    setExpenseList((prevList) => {
      const activeIndex = prevList.findIndex(
        (expense) => expense.id === active.id
      );
      const overIndex = prevList.findIndex((expense) => expense.id === overId);
      const updatedList = [...prevList];
      const [removed] = updatedList.splice(activeIndex, 1);
      updatedList.splice(overIndex, 0, removed);
      return updatedList;
    });
  };

  const handleRequestChangeOrder = () => {
    // TODO : 순서 변경 요청 보내기
    console.log(expenseList);
    setMode('VIEW');
  };

  return (
    <>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext
          items={expenseList.map((expense) => expense.id)}
          id="sortable-expense"
          strategy={rectSortingStrategy}
        >
          <S.CardListContainer ref={setNodeRef}>
            {expenseList.map((expense, index) => (
              <EditOrderItem key={expense.id} index={index} {...expense} />
            ))}
          </S.CardListContainer>
        </SortableContext>
      </DndContext>
      <S.ButtonWrapper>
        <S.BottomButton type="button" onClick={handleRequestChangeOrder}>
          완료
        </S.BottomButton>
      </S.ButtonWrapper>
    </>
  );
}

export default EditOrderList;

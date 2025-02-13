import { Dispatch, SetStateAction, useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  UniqueIdentifier,
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
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const { setNodeRef } = useDroppable({
    id: 'expense-list',
  });
  const sensors = useSensors(useSensor(TouchSensor), useSensor(MouseSensor));

  const handleDragStart = ({ active }: DragStartEvent) => {
    console.log('handleDragStart', active);
    setActiveId(active.id);
  };
  const handleDragCancel = () => {
    console.log('handleDragCancel');
    setActiveId(null);
  };
  const handleDragOver = ({ active, over }: DragOverEvent) => {
    const overId = over?.id;
    if (!overId) {
      return;
    }
    console.log('handleDragOver', activeId, overId);
  };
  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const overId = over?.id;
    if (!overId) {
      return;
    }
    console.log('handleDragEnd', activeId, overId);
    return;
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragCancel={handleDragCancel}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
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
        <S.BottomButton
          type="button"
          onClick={() => {
            // TODO : 순서 변경 요청 보내기
            setMode('VIEW');
          }}
        >
          완료
        </S.BottomButton>
      </S.ButtonWrapper>
    </>
  );
}

export default EditOrderList;

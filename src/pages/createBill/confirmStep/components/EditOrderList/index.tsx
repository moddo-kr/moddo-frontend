import { Dispatch, SetStateAction } from 'react';
import { Expense } from '@/pages/createBill/types/expense.type';
import EditOrderItem from '../EditOrderItem';
import * as S from './index.styles';

interface EditOrderListProps {
  expenses: Expense[];
  setMode: Dispatch<SetStateAction<'VIEW' | 'EDIT'>>;
}

function EditOrderList({ expenses, setMode }: EditOrderListProps) {
  return (
    <>
      <S.CardListContainer>
        {expenses.map((expense, index) => (
          <EditOrderItem key={expense.id} index={index} {...expense} />
        ))}
      </S.CardListContainer>
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

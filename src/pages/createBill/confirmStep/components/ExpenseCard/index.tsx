import { CarbonEdit, Close, Next } from '@/assets/svgs/icon';
import Chip from '@/common/components/Chip';
import useDeleteMutation from '@/common/queries/expense/useDeleteExpense';
import { Expense } from '@/pages/createBill/types/expense.type';
import * as S from './index.styles';

interface ExpenseCardProps extends Expense {
  index: number;
}

function ExpenseCard({
  id,
  index,
  amount,
  content,
  memberExpenses,
}: ExpenseCardProps) {
  const mutation = useDeleteMutation();

  const handleDelete = () => {
    mutation.mutate({
      groupToken: 'groupToken', // TODO : groupToken 추가 필요함
      expenseId: id,
    });
  };

  return (
    <S.ExpenseCardWrapper>
      <S.Card>
        <S.TopWrapper>
          <S.Index>{index + 1}차</S.Index>
          <S.IconButtonsWrapper>
            <S.IconButton
              type="button"
              onClick={() => {
                console.log(`${index + 1}차 수정`);
              }}
            >
              <CarbonEdit />
            </S.IconButton>
            {index !== 0 ? (
              <S.IconButton type="button" onClick={handleDelete}>
                <Close />
              </S.IconButton>
            ) : null}
          </S.IconButtonsWrapper>
        </S.TopWrapper>
        <S.Content>{content}</S.Content>
        <S.BottomWrapper>
          <S.Distribute>
            <S.DistributeText>{amount.toLocaleString()}</S.DistributeText>
            <S.DistributeText> 원</S.DistributeText>
          </S.Distribute>
          <S.MemberCollapse collapsible variant="plain">
            <S.CollapseItem value="members">
              <S.CollapseTrigger>
                <S.TriggerText>
                  총 <S.MemberCount>{memberExpenses.length}</S.MemberCount>명
                </S.TriggerText>
                <Next width="1.5rem" />
              </S.CollapseTrigger>
              <S.CollapseContent>
                {memberExpenses.map((member) => (
                  <Chip
                    key={`${index}-${member.memberId}`}
                    label={member.name}
                    variant="white"
                  />
                ))}
              </S.CollapseContent>
            </S.CollapseItem>
          </S.MemberCollapse>
        </S.BottomWrapper>
      </S.Card>
    </S.ExpenseCardWrapper>
  );
}

export default ExpenseCard;

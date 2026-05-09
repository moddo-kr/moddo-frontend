import { useLoaderData } from 'react-router';
import { CarbonEdit, Close } from '@/shared/assets/svgs/icon';
import Chip from '@/shared/ui/Chip';
import { Expense } from '@/entities/expense/model/expense.type';
import Text from '@/shared/ui/Text';
import { TextButton } from '@/shared/design-system/ui';
import { EditExpenseContext } from '@/features/expense-management/lib/createExpenseFunnel.type';
import useDeleteMutation from './api/useDeleteExpense';
import * as S from './index.styles';

interface ExpenseCardProps extends Expense {
  index: number;
  onEdit: (context: EditExpenseContext) => void;
}

function ExpenseCard({
  id,
  index,
  amount,
  content,
  date,
  memberExpenses,
  onEdit,
}: ExpenseCardProps) {
  const { groupToken } = useLoaderData();
  const mutation = useDeleteMutation(groupToken);

  const handleDelete = () => {
    mutation.mutate({
      groupToken,
      expenseId: id,
    });
  };

  return (
    <S.ExpenseCardWrapper>
      <S.Card>
        <S.TopWrapper>
          <Text variant="title">{index + 1}차</Text>
          <S.IconButtonsWrapper>
            <TextButton
              aria-label="지출 수정"
              onClick={() => {
                onEdit({
                  expenseId: id,
                  initialExpense: {
                    amount,
                    content,
                    date,
                    memberExpenses,
                  },
                });
              }}
            >
              <CarbonEdit width={20} />
            </TextButton>
            {index !== 0 ? (
              <TextButton aria-label="지출 삭제" onClick={handleDelete}>
                <Close width={20} />
              </TextButton>
            ) : null}
          </S.IconButtonsWrapper>
        </S.TopWrapper>
        <Text variant="body1R">{content}</Text>
        <S.BottomWrapper>
          <S.Distribute>
            <Text variant="heading2">{amount.toLocaleString()}</Text>
            <Text variant="heading2">원</Text>
          </S.Distribute>
          <S.CollapseItem>
            <S.CollapseHeader>
              <Text variant="body2Sb">
                총{' '}
                <Text variant="body2Sb" color="semantic.orange.default">
                  {memberExpenses.length}
                </Text>
                명
              </Text>
            </S.CollapseHeader>
            <S.CollapseContent>
              {memberExpenses.map((member) => (
                <Chip
                  key={`${index}-${member.id}`}
                  label={member.name}
                  variant={member.role === 'MANAGER' ? 'primary' : 'secondary'}
                  size="sm"
                />
              ))}
            </S.CollapseContent>
          </S.CollapseItem>
        </S.BottomWrapper>
      </S.Card>
    </S.ExpenseCardWrapper>
  );
}

export default ExpenseCard;

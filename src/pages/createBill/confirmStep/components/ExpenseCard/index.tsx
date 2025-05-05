import { useLoaderData } from 'react-router';
import { CarbonEdit, Close, Next } from '@/assets/svgs/icon';
import Chip from '@/common/components/Chip';
import useDeleteMutation from '@/common/queries/expense/useDeleteExpense';
import { Expense } from '@/pages/createBill/types/expense.type';
import { EditBillContext } from '@/pages/createBill/types/funnel.type';
import Text from '@/common/components/Text';
import Button from '@/common/components/Button';
import * as S from './index.styles';

interface ExpenseCardProps extends Expense {
  index: number;
  onEdit: (context: EditBillContext) => void;
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
            <Button
              variant="text"
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
            </Button>
            {index !== 0 ? (
              <Button variant="text" onClick={handleDelete}>
                <Close width={20} />
              </Button>
            ) : null}
          </S.IconButtonsWrapper>
        </S.TopWrapper>
        <Text variant="body1R">{content}</Text>
        <S.BottomWrapper>
          <S.Distribute>
            <Text variant="heading2">{amount.toLocaleString()}</Text>
            <Text variant="heading2">원</Text>
          </S.Distribute>
          <S.MemberCollapse collapsible variant="plain">
            <S.CollapseItem value="members">
              <S.CollapseTrigger>
                <Text variant="body2Sb">
                  총{' '}
                  <Text variant="body2Sb" color="semantic.primary.default">
                    {memberExpenses.length}
                  </Text>
                  명
                </Text>
                <Next width="1.5rem" />
              </S.CollapseTrigger>
              <S.CollapseContent>
                {memberExpenses.map((member) => (
                  <Chip
                    key={`${index}-${member.id}`}
                    label={member.name}
                    variant={
                      member.role === 'MANAGER' ? 'primary' : 'secondary'
                    }
                    size="sm"
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

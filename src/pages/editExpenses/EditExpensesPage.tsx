import { useNavigate, useLoaderData } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import { useFunnel } from '@use-funnel/react-router';
import {
  EditExpenseContext,
  EditExpenseStepContext,
  ExpenseStepContext,
} from '@/features/expense-management/lib/createExpenseFunnel.type';
import { ConfirmStepPage } from '@/pages/confirmStep';
import { AddExpenseStepPage } from '@/pages/addExpenseStep';
import { EditExpenseStepPage } from '@/pages/editExpenseStep';

function EditExpensesPage() {
  const { groupToken } = useLoaderData() as { groupToken: string };
  const navigate = useNavigate();

  const funnel = useFunnel<{
    confirm: ExpenseStepContext;
    add: ExpenseStepContext;
    edit: EditExpenseStepContext;
  }>({
    id: 'edit-expenses',
    initial: {
      step: 'confirm',
      context: { isExpenseCreated: false },
    },
  });

  return (
    <funnel.Render
      // eslint-disable-next-line react/no-unstable-nested-components
      confirm={funnel.Render.with({
        events: {
          edit: (
            { expenseId, initialExpense }: EditExpenseContext,
            { history }
          ) => {
            history.push('edit', {
              isExpenseCreated: true,
              expenseId,
              initialExpense,
            });
          },
          add: (_, { history }) => {
            history.push('add');
          },
          next: () => {
            navigate(ROUTE.expenseDetail.replace(':groupToken', groupToken));
          },
          back: () => {
            navigate(ROUTE.expenseDetail.replace(':groupToken', groupToken));
          },
        },
        render: ({ dispatch }) => (
          <ConfirmStepPage
            onBack={() => dispatch('back')}
            onNext={() => dispatch('next')}
            onEdit={(props: EditExpenseContext) => dispatch('edit', props)}
            onAdd={() => dispatch('add')}
          />
        ),
      })}
      // eslint-disable-next-line react/no-unstable-nested-components
      add={({ history }) => (
        <AddExpenseStepPage onNext={() => history.push('confirm')} />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      edit={({ context, history }) => (
        <EditExpenseStepPage
          onNext={() => history.push('confirm')}
          onBack={() => history.back()}
          expenseId={context.expenseId}
          initialExpense={context.initialExpense}
        />
      )}
    />
  );
}

export default EditExpensesPage;

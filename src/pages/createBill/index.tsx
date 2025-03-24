import { useFunnel } from '@use-funnel/react-router';
import CreateExpenseStep from './createExpenseStep';
import ConfirmStep from './confirmStep';
import AddAccountStep from './addAccountStep';
import ShareStep from './shareStep';
import AddExpenseStep from './addExpenseStep';
import EditExpenseStep from './editExpenseStep';
import QrStep from './qrStep';
import {
  BillStepContext,
  EditBillContext,
  EditBillStepContext,
} from './types/funnel.type';

function CreateBill() {
  const funnel = useFunnel<{
    create: BillStepContext;
    confirm: BillStepContext;
    account: BillStepContext;
    share: BillStepContext;
    qr: BillStepContext;
    add: BillStepContext;
    edit: EditBillStepContext;
  }>({
    id: 'create-bill',
    initial: {
      step: 'create',
      context: {
        isExpenseCreated: false,
      },
    },
  });
  return (
    <funnel.Render
      // eslint-disable-next-line react/no-unstable-nested-components
      create={({ history }) => (
        <CreateExpenseStep
          onNext={() => history.push('confirm', { isExpenseCreated: true })}
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      confirm={funnel.Render.with({
        events: {
          edit: (
            { expenseId, initialExpense }: EditBillContext,
            { history }
          ) => {
            history.push('edit', { expenseId, initialExpense });
          },
          add: (_, { history }) => {
            history.push('add');
          },
          next: (_, { history }) => {
            history.push('account');
          },
          back: (_, { history }) => {
            history.back();
          },
        },
        render: ({ dispatch }) => (
          <ConfirmStep
            onBack={() => dispatch('back')}
            onNext={() => dispatch('next')}
            onEdit={(props: EditBillContext) => {
              dispatch('edit', props);
            }}
            onAdd={() => dispatch('add')}
          />
        ),
      })}
      // eslint-disable-next-line react/no-unstable-nested-components
      add={({ history }) => (
        <AddExpenseStep onNext={() => history.push('confirm')} />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      edit={({ context, history }) => (
        <EditExpenseStep
          onNext={() => history.push('confirm')}
          onBack={() => history.back()}
          expenseId={context.expenseId}
          initialExpense={context.initialExpense}
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      account={({ history }) => (
        <AddAccountStep
          onBack={() => history.back()}
          onNext={() => history.push('share')}
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      share={({ history }) => (
        <ShareStep
          onBack={() => history.back()}
          onNext={() => history.push('qr')}
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      qr={({ history }) => <QrStep onBack={() => history.back()} />}
    />
  );
}

export default CreateBill;

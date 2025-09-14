import { useFunnel } from '@use-funnel/react-router';
import {
  BillStepContext,
  EditBillContext,
  EditBillStepContext,
} from './types/funnel.type';
import { CreateExpenseStepPage } from '../createExpenseStep';
import { ConfirmStepPage } from '../confirmStep';
import { AddExpenseStepPage } from '../addExpenseStep';
import { EditExpenseStepPage } from '../editExpenseStep';
import { AddAccountStepPage } from '../addAccountStep';
import { ShareStepPage } from '../shareStep';
import { QrStepPage } from '../qrStep';

function CreateBillPage() {
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
        <CreateExpenseStepPage
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
          <ConfirmStepPage
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
      // eslint-disable-next-line react/no-unstable-nested-components
      account={({ history }) => (
        <AddAccountStepPage
          onBack={() => history.back()}
          onNext={() => history.push('share')}
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      share={({ history }) => (
        <ShareStepPage
          onBack={() => history.back()}
          onNext={() => history.push('qr')}
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      qr={({ history }) => <QrStepPage onBack={() => history.back()} />}
    />
  );
}

export default CreateBillPage;

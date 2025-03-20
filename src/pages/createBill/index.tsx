import { useFunnel as useTossFunnel } from '@use-funnel/react-router';
import useFunnel from '@/common/hooks/useFunnel';
import { FunnelStep } from '@/common/types/useFunnel.type';
import { BillContext } from './types/billContext.type';
import { SingleExpenseForm } from './types/expense.type';
import CreateExpenseStep from './createExpenseStep';
import ConfirmStep from './confirmStep';
import AddAccountStep from './addAccountStep';
import ShareStep from './shareStep';
import AddExpenseStep from './addExpenseStep';
import EditExpenseStep from './editExpenseStep';
import QrStep from './qrStep';

const funnelSteps: FunnelStep<BillContext>[] = [
  {
    name: 'CREATE_EXPENSE',
    requiredFields: [],
  },
  {
    name: 'ADD_EXPENSE',
    requiredFields: [],
    manualOnly: true,
  },
  {
    name: 'EDIT_EXPENSE',
    requiredFields: [],
    manualOnly: true,
  },
  {
    name: 'CONFIRM',
    requiredFields: [],
  },
  {
    name: 'ADD_ACCOUNT',
    requiredFields: [],
  },
  {
    name: 'SHARE',
    requiredFields: [],
  },
  {
    name: 'QR',
    requiredFields: [],
  },
];

type BillStepType = {
  createExpense: boolean;
  expenseId?: number;
  initialExpense?: SingleExpenseForm;
};

type EditBillStepType = {
  createExpense: boolean;
  expenseId: number;
  initialExpense: SingleExpenseForm;
};

function CreateBill() {
  const {
    currentStep,
    moveToNextStep,
    moveToPreviousStep,
    moveToStep,
    // context,
  } = useFunnel<BillContext>({
    steps: funnelSteps,
    initialContext: {},
  });
  const funnel = useTossFunnel<{
    create: BillStepType;
    confirm: BillStepType;
    account: BillStepType;
    share: BillStepType;
    qr: BillStepType;
    add: BillStepType;
    edit: EditBillStepType;
  }>({
    id: 'create-bill',
    initial: {
      step: 'create',
      context: {
        createExpense: false,
      },
    },
  });

  switch (currentStep) {
    case 'ADD_ACCOUNT':
      return (
        <AddAccountStep
          moveToPreviousStep={moveToPreviousStep}
          moveToNextStep={moveToNextStep}
        />
      );
    case 'SHARE':
      return (
        <ShareStep
          moveToPreviousStep={moveToPreviousStep}
          moveToNextStep={moveToNextStep}
        />
      );
    case 'QR':
      return <QrStep moveToPreviousStep={moveToPreviousStep} />;
    default:
      return (
        <funnel.Render
          // eslint-disable-next-line react/no-unstable-nested-components
          create={({ history }) => (
            <CreateExpenseStep
              moveToNextStep={() =>
                history.push('confirm', { createExpense: true })
              }
            />
          )}
          // eslint-disable-next-line react/no-unstable-nested-components
          confirm={funnel.Render.with({
            events: {
              edit: (
                {
                  expenseId,
                  initialExpense,
                }: {
                  expenseId: number;
                  initialExpense: SingleExpenseForm;
                },
                { history }
              ) => {
                history.push('edit', { expenseId, initialExpense });
              },
              add: (_, { history }) => {
                history.push('add');
              },
            },
            render: ({ dispatch }) => (
              <ConfirmStep
                moveToPreviousStep={moveToPreviousStep}
                moveToNextStep={moveToNextStep}
                moveToStep={moveToStep}
                onEdit={(props: {
                  expenseId: number;
                  initialExpense: SingleExpenseForm;
                }) => {
                  dispatch('edit', props);
                }}
                onAdd={() => dispatch('add')}
              />
            ),
          })}
          // eslint-disable-next-line react/no-unstable-nested-components
          add={({ history }) => (
            <AddExpenseStep moveToNextStep={() => history.push('confirm')} />
          )}
          // eslint-disable-next-line react/no-unstable-nested-components
          edit={({ context, history }) => (
            <EditExpenseStep
              moveToNextStep={() => history.push('confirm')}
              id={context.expenseId}
              initialExpense={context.initialExpense}
            />
          )}
        />
      );
  }
}

export default CreateBill;

import useFunnel from '@/common/hooks/useFunnel';
import { FunnelStep } from '@/common/types/useFunnel.type';
import { BillContext } from './types/billContext.type';
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

function CreateBill() {
  const {
    currentStep,
    moveToNextStep,
    moveToPreviousStep,
    moveToStep,
    context,
  } = useFunnel<BillContext>({
    steps: funnelSteps,
    initialContext: {},
  });

  switch (currentStep) {
    case 'CREATE_EXPENSE':
      return <CreateExpenseStep moveToNextStep={moveToNextStep} />;
    case 'ADD_EXPENSE':
      return <AddExpenseStep moveToNextStep={moveToNextStep} />;
    case 'EDIT_EXPENSE':
      return (
        context.initialExpense &&
        context.id && (
          <EditExpenseStep
            id={context.id}
            moveToNextStep={moveToNextStep}
            initialExpense={context.initialExpense}
          />
        )
      );
    case 'CONFIRM':
      return (
        <ConfirmStep
          moveToPreviousStep={moveToPreviousStep}
          moveToNextStep={moveToNextStep}
          moveToStep={moveToStep}
        />
      );
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
      return null;
  }
}

export default CreateBill;

import useFunnel from '@/common/hooks/useFunnel';
import { FunnelStep } from '@/common/types/useFunnel.type';
import { BillContext } from './types/billContext.type';
import CreateExpenseStep from './createExpenseStep';
import ConfirmStep from './confirmStep';
import AddAccountStep from './addAccountStep';
import ShareStep from './shareStep';
import AddExpenseStep from './addExpenseStep';

const funnelSteps: FunnelStep<BillContext>[] = [
  {
    name: 'CREATE_EXPENSE',
    requiredFields: [],
  },
  {
    name: 'ADD_EXPENSE',
    requiredFields: [],
    onlyManualMove: true,
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
];

function CreateBill() {
  const { currentStep, moveToNextStep, moveToPreviousStep, moveToStep } =
    useFunnel<BillContext>({
      steps: funnelSteps,
      initialContext: {},
    });

  switch (currentStep) {
    case 'CREATE_EXPENSE':
      return <CreateExpenseStep moveToNextStep={moveToNextStep} />;
    case 'ADD_EXPENSE':
      return <AddExpenseStep moveToNextStep={moveToNextStep} />;
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
      return <ShareStep moveToPreviousStep={moveToPreviousStep} />;
    default:
      return null;
  }
}

export default CreateBill;

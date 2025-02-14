import useFunnel from '@/common/hooks/useFunnel';
import { FunnelStep } from '@/common/types/useFunnel.type';
import { BillContext } from './types/billContext.type';
import CreateExpenseStep from './createExpenseStep';
import ConfirmStep from './confirmStep';
import AddAccountStep from './addAccountStep';
import ShareStep from './shareStep';

const funnelSteps: FunnelStep<BillContext>[] = [
  {
    name: 'CREATE_EXPENSE',
    requiredFields: [],
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
  const { currentStep, moveToNextStep, moveToPreviousStep } =
    useFunnel<BillContext>({
      steps: funnelSteps,
      initialContext: {},
    });

  switch (currentStep) {
    case 'CREATE_EXPENSE':
      return <CreateExpenseStep moveToNextStep={moveToNextStep} />;
    case 'CONFIRM':
      return (
        <ConfirmStep
          moveToPreviousStep={moveToPreviousStep}
          moveToNextStep={moveToNextStep}
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

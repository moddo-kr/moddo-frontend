import useFunnel from '@/common/hooks/useFunnel';
import { FunnelStep } from '@/common/types/useFunnel.type';
import AddExpenseStep from './addExpenseStep';
import ConfirmStep from './confirmStep';
import AddAccountStep from './addAccountStep';
import ShareStep from './shareStep';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BillContext {}

const funnelSteps: FunnelStep<BillContext>[] = [
  {
    name: 'ADD_EXPENSE',
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
    case 'ADD_EXPENSE':
      return <AddExpenseStep />;
    case 'CONFIRM':
      return <ConfirmStep />;
    case 'ADD_ACCOUNT':
      return <AddAccountStep />;
    case 'SHARE':
      return <ShareStep />;
    default:
      return null;
  }
}

export default CreateBill;

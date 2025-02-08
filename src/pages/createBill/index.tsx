import { useEffect } from 'react';
import useFunnel from '@/common/hooks/useFunnel';
import { FunnelStep } from '@/common/types/useFunnel.type';
import { BillContext } from './types/billContext.type';
import AddExpenseStep from './addExpenseStep';
import ConfirmStep from './confirmStep';
import AddAccountStep from './addAccountStep';
import ShareStep from './shareStep';
import { useGroupSetupStore } from '../groupSetup/stores/useGroupSetupStore';
import { useCreateBillStore } from './stores/useCreateBillStore';

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

  const { members } = useGroupSetupStore();
  const { setMemberExpenses } = useCreateBillStore();

  useEffect(() => {
    setMemberExpenses(
      members.map((member, index) => ({
        memberId: index + 1,
        amount: 0,
        name: member.name,
      }))
    );
  }, [members, setMemberExpenses]);

  switch (currentStep) {
    case 'ADD_EXPENSE':
      return <AddExpenseStep moveToNextStep={moveToNextStep} />;
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
      return <ShareStep moveToNextStep={moveToNextStep} />;
    default:
      return null;
  }
}

export default CreateBill;

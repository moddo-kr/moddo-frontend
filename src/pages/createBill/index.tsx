import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import AddExpenseStep from './addExpenseStep';
import ConfirmStep from './confirmStep';

// NOTE : 페이지 확인용 임시 메인 페이지
function CreateBill() {
  const [step, setStep] = useState<'MAIN' | 'ADD_BILL' | 'CONFIRM'>('MAIN');

  switch (step) {
    case 'MAIN':
      return (
        <div>
          <h1>정산 페이지</h1>
          <Button type="button" onClick={() => setStep('ADD_BILL')}>
            정산 추가
          </Button>
          <Button type="button" onClick={() => setStep('CONFIRM')}>
            정산 확인
          </Button>
        </div>
      );
    case 'ADD_BILL':
      return <AddExpenseStep />;
    case 'CONFIRM':
      return <ConfirmStep />;
    default:
      return null;
  }
}

export default CreateBill;

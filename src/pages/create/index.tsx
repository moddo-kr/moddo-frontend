import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import AddExpenseStep from './addExpenseStep';

// NOTE : 페이지 확인용 임시 메인 페이지
function Create() {
  const [step, setStep] = useState<'MAIN' | 'ADD_BILL'>('MAIN');

  switch (step) {
    case 'MAIN':
      return (
        <div>
          <h1>정산 페이지</h1>
          <Button type="button" onClick={() => setStep('ADD_BILL')}>
            정산 추가
          </Button>
        </div>
      );
    case 'ADD_BILL':
      return <AddExpenseStep />;
    default:
      return null;
  }
}

export default Create;

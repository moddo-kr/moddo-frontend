import { useState } from 'react';

// NOTE : 페이지 확인용 임시 메인 페이지
function Create() {
  const [step, setStep] = useState<'MAIN' | 'ADD_BILL'>('MAIN');

  switch (step) {
    case 'MAIN':
      return (
        <div>
          <h1>정산 페이지</h1>
          <button type="button" onClick={() => setStep('ADD_BILL')}>
            정산 추가
          </button>
        </div>
      );
    case 'ADD_BILL':
      return (
        <div>
          <h1>정산 추가</h1>
        </div>
      );
    default:
      return null;
  }
}

export default Create;

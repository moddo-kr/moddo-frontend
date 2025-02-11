import { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { ArrowLeft } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import ExpenseCardList from './components/ExpenseCardList';
import EditOrderList from './components/EditOrderList';
import useGetAllExpense from './hooks/useGetAllExpense';
import getTotalExpense from '../utils/getTotalExpense';
import { BillContext } from '../types/billContext.type';
import * as S from './index.styles';

const DUMMY_MEET_ID = 1;

interface ConfirmStepProps extends BaseFunnelStepComponentProps<BillContext> {}

function ConfirmStep({ moveToNextStep, moveToPreviousStep }: ConfirmStepProps) {
  // TODO : meetId를 알아내는 로직이 필요함
  const { data, isLoading } = useGetAllExpense(DUMMY_MEET_ID);
  const [mode, setMode] = useState<'VIEW' | 'EDIT'>('VIEW');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.expenses) {
    return <div>지출 내역이 없습니다.</div>;
  }

  return (
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={<ArrowLeft width="1.5rem" />}
        leftButtonOnClick={moveToPreviousStep}
        rightButtonContent={<S.AddExpenseButton>지출 추가</S.AddExpenseButton>}
      />
      <VStack align="flex-start" gap="1.5rem" flex={1}>
        <S.TopWrapper>
          <S.TopMessage>{`지출 내역을\n확인해주세요`}</S.TopMessage>
        </S.TopWrapper>
        <S.TotalExpenseWrapper>
          <S.TotalExpense>누적 금액</S.TotalExpense>
          <S.TotalExpenseAmount>
            {getTotalExpense(data.expenses).toLocaleString()}원
          </S.TotalExpenseAmount>
        </S.TotalExpenseWrapper>
        {mode === 'VIEW' ? (
          <ExpenseCardList expenses={data.expenses} />
        ) : (
          <EditOrderList
            expenses={data.expenses}
            returnToViewMode={() => setMode('VIEW')}
          />
        )}
        <S.ChangeOrderButton
          type="button"
          onClick={() => {
            setMode('EDIT');
          }}
        >
          순서 바꾸기
        </S.ChangeOrderButton>
      </VStack>
      <S.ButtonWrapper>
        <S.BottomButton
          type="button"
          onClick={() => {
            moveToNextStep?.();
          }}
        >
          확인했어요
        </S.BottomButton>
      </S.ButtonWrapper>
    </>
  );
}

export default ConfirmStep;

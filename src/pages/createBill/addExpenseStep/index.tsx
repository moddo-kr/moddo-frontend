import { useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Close } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import {
  Expense,
  ExpenseFormSchema,
} from '@/pages/createBill/types/expense.type';
import BillFormCard from './components/FormCard';
import getTotalExpense from '../utils/getTotalExpense';
import { BillContext } from '../types/billContext.type';
import * as S from './index.styles';

const defaultValues: Omit<Expense, 'id'> = {
  amount: 0,
  content: '',
  date: new Date(),
  memberExpenses: [
    { memberId: 1, amount: 0, name: '김달걀' },
    { memberId: 2, amount: 0, name: '날달걀' },
    { memberId: 3, amount: 0, name: '송에그' },
    { memberId: 4, amount: 0, name: '강흰자' },
    { memberId: 5, amount: 0, name: '연노른자' },
    { memberId: 6, amount: 0, name: '강계란' },
  ],
};

interface AddExpenseStepProps
  extends BaseFunnelStepComponentProps<BillContext> {}

function AddExpenseStep({ moveToNextStep }: AddExpenseStepProps) {
  const [tabMode, setTabMode] = useState<'DIVIDE_N' | 'DIVIDE_CUSTOM'>(
    'DIVIDE_N'
  );
  const formMethods = useForm({
    resolver: zodResolver(ExpenseFormSchema),
    mode: 'onChange', // 폼들의 필수 입력값이 모두 입력되었을 때 '다음' 버튼을 활성화시키기 위함
    defaultValues: {
      expenses: [defaultValues],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: 'expenses',
  });

  const { handleSubmit, formState, watch } = formMethods;
  const allFormsValid = formState.isValid;
  const expenses = watch('expenses');

  const handleAddExpense = () => {
    append(defaultValues);
  };

  const handleDeleteExpense = (index: number) => {
    remove(index);
  };

  // 임시...
  const onFormSubmit = (data: any) => {
    console.log(data);
    moveToNextStep?.();
  };

  return (
    <FormProvider {...formMethods}>
      <Header
        type="TitleCenter"
        leftButtonContent={<Close width="1.5rem" />}
        rightButtonContent={<S.AddExpenseButton>지출 추가</S.AddExpenseButton>}
        rightButtonOnClick={handleAddExpense}
      />
      <S.TopWrapper>
        <S.TopMessage>
          <S.MoimName>DND 7조 첫모임</S.MoimName>
          {`의\n지출 내역을 입력해주세요.`}
        </S.TopMessage>
      </S.TopWrapper>
      <S.TabContainer>
        <S.TabButton
          $isSelected={tabMode === 'DIVIDE_N'}
          onClick={() => setTabMode('DIVIDE_N')}
        >
          1/N 으로 나누기
        </S.TabButton>
        <S.TabButton
          $isSelected={tabMode === 'DIVIDE_CUSTOM'}
          onClick={() => setTabMode('DIVIDE_CUSTOM')}
          disabled
        >
          직접 입력하기
        </S.TabButton>
      </S.TabContainer>
      <S.BillFormList>
        {fields.map((field, index) => (
          <BillFormCard
            key={field.id}
            index={index}
            onDelete={handleDeleteExpense}
          />
        ))}
      </S.BillFormList>
      {/* TODO : 지출 내역 입력_직접 입력하기 */}
      <S.ButtonWrapper>
        <S.BottomButton
          type="button"
          onClick={handleSubmit(onFormSubmit)}
          disabled={!allFormsValid}
        >
          {`총 ${getTotalExpense(expenses).toLocaleString()}원`}
        </S.BottomButton>
      </S.ButtonWrapper>
    </FormProvider>
  );
}

export default AddExpenseStep;

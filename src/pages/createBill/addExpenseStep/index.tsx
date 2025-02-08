import { useEffect, useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Close } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import {
  Expense,
  ExpenseFormSchema,
} from '@/pages/createBill/types/expense.type';
import { useGroupSetupStore } from '@/pages/groupSetup/stores/useGroupSetupStore';
import BillFormCard from './components/FormCard';
import getTotalExpense from '../utils/getTotalExpense';
import { BillContext } from '../types/billContext.type';
import * as S from './index.styles';
import { useCreateBillStore } from '../stores/useCreateBillStore';
import { DevTool } from '@hookform/devtools';

const defaultValues: Omit<Expense, 'id'> = {
  amount: 0,
  content: '',
  date: new Date(),
  memberExpenses: [],
};

interface AddExpenseStepProps
  extends BaseFunnelStepComponentProps<BillContext> {}

function AddExpenseStep({ moveToNextStep }: AddExpenseStepProps) {
  const [tabMode, setTabMode] = useState<'DIVIDE_N' | 'DIVIDE_CUSTOM'>(
    'DIVIDE_N'
  );
  const { memberExpenses, setExpenses } = useCreateBillStore();
  const formMethods = useForm({
    resolver: zodResolver(ExpenseFormSchema),
    mode: 'onChange', // 폼들의 필수 입력값이 모두 입력되었을 때 '다음' 버튼을 활성화시키기 위함
    defaultValues: {
      expenses: [defaultValues],
    },
  });
  const { fields } = useFieldArray({
    control: formMethods.control,
    name: 'expenses',
  });
  const { groupName } = useGroupSetupStore();

  const { handleSubmit, formState, watch, control } = formMethods;
  const allFormsValid = formState.isValid;
  const expenses = watch('expenses');

  // Zustand 상태 변경 시 폼 동기화
  useEffect(() => {
    formMethods.setValue('expenses.0.memberExpenses', memberExpenses, {
      shouldValidate: true, // 유효성 검사 트리거
      shouldDirty: true, // dirty 상태 업데이트
    });
  }, [memberExpenses, formMethods]);

  // 임시...
  const onFormSubmit = (data: any) => {
    setExpenses({
      expenses: data.expenses.map((expense: any, index: number) => ({
        ...expense,
        id: index + 1,
      })),
    });
    moveToNextStep?.();
  };

  return (
    <FormProvider {...formMethods}>
      <Header
        type="TitleCenter"
        leftButtonContent={<Close width="1.5rem" />}
        rightButtonContent={<S.AddExpenseButton>지출 추가</S.AddExpenseButton>}
      />
      <S.TopWrapper>
        <S.TopMessage>
          <S.MoimName>{groupName}</S.MoimName>
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
          <BillFormCard key={field.id} index={index} />
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
      {/* <DevTool control={control} /> */}
    </FormProvider>
  );
}

export default AddExpenseStep;

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

  const { handleSubmit, formState } = formMethods;
  const allFormsValid = formState.isValid;

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
        rightButtonContent={<S.AddExpenseButton>지출 입력</S.AddExpenseButton>}
      />
      <S.TopWrapper>
        {/* TODO : 모임 데이터 저장 방식 논의 후 반영할 것 */}
        <S.MoimName>DND 7조 첫모임</S.MoimName>
        <S.TopMessage>{`의\n지출 내역을 입력해주세요.`}</S.TopMessage>
      </S.TopWrapper>
      <S.BillFormList>
        {fields.map((field, index) => (
          <BillFormCard key={field.id} index={index} />
        ))}
      </S.BillFormList>
      <S.BottomButton
        type="button"
        onClick={handleSubmit(onFormSubmit)}
        disabled={!allFormsValid}
      >
        다음
      </S.BottomButton>
    </FormProvider>
  );
}

export default AddExpenseStep;

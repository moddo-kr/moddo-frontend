import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { VStack } from '@chakra-ui/react';
import { Expense, ExpenseFormSchema } from '@/pages/create/types/expense.type';
import BillFormCard from './components/FormCard';
import * as S from './index.styles';

const defaultValues: Omit<Expense, 'id'> = {
  amount: 0,
  content: '',
  date: new Date(),
  memberExpenses: [
    { id: 1, amount: 0, name: '김달걀' },
    { id: 2, amount: 0, name: '날달걀' },
    { id: 3, amount: 0, name: '송에그' },
    { id: 4, amount: 0, name: '강흰자' },
    { id: 5, amount: 0, name: '연노른자' },
    { id: 6, amount: 0, name: '강계란' },
  ],
};

function AddExpenseStep() {
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
  };

  return (
    <FormProvider {...formMethods}>
      <VStack align="flex-start">
        {/* TODO : VStack: 정산 시작 step 공통 레이아웃 적용 전 임시 레이아웃 */}
        <S.Header>
          <S.HeaderButton>지출 추가</S.HeaderButton>
        </S.Header>
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
      </VStack>
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

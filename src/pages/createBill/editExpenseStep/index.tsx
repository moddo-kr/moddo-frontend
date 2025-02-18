import { FormProvider } from 'react-hook-form';
import { Close } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import useUpdateExpense from '@/common/queries/expense/useUpdateExpense';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import FormCard from '@/pages/createBill/components/FormCard';
import { BillContext } from '@/pages/createBill/types/billContext.type';
import { SingleExpenseForm } from '@/pages/createBill/types/expense.type2';
import useAddExpenseFormArray from '@/pages/createBill/hooks/useAddExpenseFormArray';
import * as S from './index.styles';

interface EditExpenseStepProps
  extends BaseFunnelStepComponentProps<BillContext> {
  id: number;
  initialExpense: SingleExpenseForm;
}

function EditExpenseStep({
  id,
  initialExpense,
  moveToNextStep,
}: EditExpenseStepProps) {
  const { groupInfo, formMethods, fieldArrayReturns } =
    useAddExpenseFormArray(initialExpense);
  const mutation = useUpdateExpense({ moveToNextStep });

  const { handleSubmit, formState } = formMethods;
  const allFormsValid = formState.isValid;

  if (!groupInfo) {
    return null;
  }

  return (
    <FormProvider {...formMethods}>
      <Header
        type="TitleCenter"
        leftButtonContent={<Close width="1.5rem" />}
        leftButtonOnClick={() => moveToNextStep?.()}
      />
      <S.TopWrapper>
        <S.TopMessage>
          <S.MoimName>{groupInfo.groupName}</S.MoimName>
          {`의\n지출 내역을 입력해주세요.`}
        </S.TopMessage>
      </S.TopWrapper>
      <S.BillFormList>
        {fieldArrayReturns.fields.map((field, index) => (
          <FormCard key={field.id} ref={null} index={index} />
        ))}
      </S.BillFormList>
      <S.ButtonWrapper>
        <S.BottomButton
          type="button"
          onClick={handleSubmit((data) =>
            // TODO : 그룹 토큰을 받아오는 로직 추가
            mutation.mutate({
              groupToken: 'group-token',
              data: data.expenses[0],
              expenseId: id,
            })
          )}
          disabled={!allFormsValid}
        >
          수정 완료
        </S.BottomButton>
      </S.ButtonWrapper>
    </FormProvider>
  );
}

export default EditExpenseStep;

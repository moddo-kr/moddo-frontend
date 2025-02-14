import { FormProvider } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Close } from '@/assets/svgs/icon';
import expense from '@/service/apis/expense';
import Header from '@/common/components/Header';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import FormCard from '@/pages/createBill/components/FormCard';
import { BillContext } from '@/pages/createBill/types/billContext.type';
import { Expense } from '@/pages/createBill/types/expense.type';
import useAddExpenseFormArray from '@/pages/createBill/hooks/useAddExpenseFormArray';
import * as S from './index.styles';

interface EditExpenseStepProps
  extends BaseFunnelStepComponentProps<BillContext> {
  initialExpense: Expense;
}

function EditExpenseStep({
  initialExpense,
  moveToNextStep,
}: EditExpenseStepProps) {
  const { groupInfo, formMethods, fieldArrayReturns } =
    useAddExpenseFormArray(initialExpense);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: expense.update,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses'], // TODO : GroupToken 추가 필요함
      });
      moveToNextStep?.({ initialExpense: undefined }); // 초기화한 뒤에 다음 스텝으로 이동
    },
  });

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
              expenseId: initialExpense.id,
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

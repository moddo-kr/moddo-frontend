import { useLayoutEffect, useRef } from 'react';
import { FormProvider } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Close } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import expense from '@/service/apis/expense';
import FormCard from '@/pages/createBill/components/FormCard';
import useAddExpenseFormArray from '@/pages/createBill/hooks/useAddExpenseFormArray';
import getTotalExpense from '@/pages/createBill/utils/getTotalExpense';
import { BillContext } from '@/pages/createBill/types/billContext.type';
import * as S from './index.styles';

interface CreateExpenseStepProps
  extends BaseFunnelStepComponentProps<BillContext> {}

function CreateExpenseStep({ moveToNextStep }: CreateExpenseStepProps) {
  const lastFormCardRef = useRef<HTMLDivElement | null>(null);
  const { groupInfo, formMethods, defaultFormValue, fieldArrayReturns } =
    useAddExpenseFormArray();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: expense.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses'], // TODO : GroupToken 추가 필요함
      });
      moveToNextStep?.();
    },
  });
  useLayoutEffect(() => {
    // form의 개수가 변경되면 (추가, 삭제) 마지막 form으로 스크롤 이동
    lastFormCardRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [fieldArrayReturns.fields.length]);

  const { handleSubmit, formState, watch } = formMethods;
  const allFormsValid = formState.isValid;
  const expenses = watch('expenses');

  const handleAddExpense = () => {
    // 기본 focus 기능을 사용하지 않고 새로운 폼 추가
    fieldArrayReturns.append(defaultFormValue, { shouldFocus: false });
  };
  const handleDeleteExpense = (index: number) => {
    fieldArrayReturns.remove(index);
  };

  if (!groupInfo) {
    return null;
  }

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
          <S.MoimName>{groupInfo.groupName}</S.MoimName>
          {`의\n지출 내역을 입력해주세요.`}
        </S.TopMessage>
      </S.TopWrapper>
      <S.BillFormList>
        {fieldArrayReturns.fields.map((field, index) => (
          <FormCard
            key={field.id}
            ref={
              index === fieldArrayReturns.fields.length - 1
                ? lastFormCardRef
                : null
            }
            index={index}
            onDelete={handleDeleteExpense}
          />
        ))}
      </S.BillFormList>
      <S.ButtonWrapper>
        <S.BottomButton
          type="button"
          onClick={handleSubmit((data) =>
            // TODO : 그룹 토큰을 받아오는 로직 추가
            mutation.mutate({ groupToken: 'group-token', data })
          )}
          disabled={!allFormsValid}
        >
          {`총 ${getTotalExpense(expenses).toLocaleString()}원`}
        </S.BottomButton>
      </S.ButtonWrapper>
    </FormProvider>
  );
}

export default CreateExpenseStep;

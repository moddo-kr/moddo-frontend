import { useLoaderData } from 'react-router';
import { FormProvider } from 'react-hook-form';
import { Close } from '@/shared/assets/svgs/icon';
import useAddExpenseFormArray from '@/features/expense-management/lib/useAddExpenseFormArray';
import {
  ActionArea,
  DescriptionField,
  Header,
  showToast,
} from '@/shared/design-system/ui';
import { PageLayout } from '@/shared/ui/PageLayout';
import { EditExpenseContext } from '@/features/expense-management/lib/createExpenseFunnel.type';
import FormCard from '@/features/expense-management/ui/FormCard';
import useUpdateExpense from '@/features/expense-management/api/useUpdateExpense';
import { getToken } from '@/shared/design-system';
import * as S from './EditExpenseStepPage.styles';

type EditExpenseStepProps = {
  onNext: () => void;
  onBack: () => void;
} & EditExpenseContext;

function EditExpenseStepPage({
  onNext,
  onBack,
  expenseId,
  initialExpense,
}: EditExpenseStepProps) {
  const { groupInfo, formMethods, fieldArrayReturns } =
    useAddExpenseFormArray(initialExpense);
  const { groupToken } = useLoaderData();
  const { handleSubmit, formState } = formMethods;
  const allFormsValid = formState.isValid;
  const mutation = useUpdateExpense(
    groupToken,
    {
      // expenseId에 해당하는 지출 목록을 찾지 못한 경우
      404: () => {
        showToast({
          type: 'error',
          content: '문제가 발생했어요. 지출 목록에서 다시 시도해 주세요.',
        });
        onNext();
      },
    },
    [404]
  );

  const updateHandler = handleSubmit((data) =>
    mutation.mutate(
      {
        groupToken,
        data: data.expenses[0],
        expenseId,
      },
      {
        onSuccess: onNext,
      }
    )
  );

  if (!groupInfo) {
    return null;
  }

  return (
    <FormProvider {...formMethods}>
      <PageLayout>
        <Header
          type="default"
          headingIcon={<Close width={24} color={getToken('fg.alternative')} />}
          headingIconAriaLabel="지출 수정 취소"
          onHeadingIconClick={onBack}
        />
        <DescriptionField
          title={
            <>
              <S.GroupNameHighlight>{groupInfo.groupName}</S.GroupNameHighlight>
              {`의\n지출 내역을 입력해주세요.`}
            </>
          }
          sub="총 지출 금액을 1/N로 나눌게요."
        />
        <S.ExpenseFormList>
          {fieldArrayReturns.fields.map((field, index) => (
            <FormCard key={field.id} ref={null} index={index} />
          ))}
        </S.ExpenseFormList>
        <ActionArea
          position="bottom-fixed"
          mainAction={{
            label: '수정 완료',
            onClick: updateHandler,
            disabled: !allFormsValid,
          }}
        />
      </PageLayout>
    </FormProvider>
  );
}

export default EditExpenseStepPage;

import { useLoaderData } from 'react-router';
import { FormProvider } from 'react-hook-form';
import { Close } from '@/shared/assets/svgs/icon';
import Header from '@/shared/ui/Header';
import FormCard from '@/shared/ui/FormCard';
import useAddExpenseFormArray from '@/domains/expense/lib/useAddExpenseFormArray';
import DescriptionField from '@/shared/ui/DescriptionField';
import Text from '@/shared/ui/Text';
import Button from '@/shared/ui/Button';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import { showToast } from '@/shared/ui/Toast';
import { EditBillContext } from '@/shared/types/createBillFunnel.type';
import useUpdateExpense from './api/useUpdateExpense';
import * as S from './EditExpenseStepPage.styles';

type EditExpenseStepProps = {
  onNext: () => void;
  onBack: () => void;
} & EditBillContext;

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
      <Header
        type="TitleCenter"
        leftButtonContent={<Close width={24} />}
        leftButtonOnClick={onBack}
      />
      <DescriptionField
        title={
          <>
            <Text variant="heading2" color="semantic.orange.default">
              {groupInfo.groupName}
            </Text>
            {`의\n지출 내역을 입력해주세요.`}
          </>
        }
        sub="총 지출 금액을 1/N로 나눌게요."
      />
      <S.BillFormList>
        {fieldArrayReturns.fields.map((field, index) => (
          <FormCard key={field.id} ref={null} index={index} />
        ))}
      </S.BillFormList>
      <BottomButtonContainer $bgColor="semantic.background.normal.alternative">
        <Button onClick={updateHandler} disabled={!allFormsValid}>
          수정 완료
        </Button>
      </BottomButtonContainer>
    </FormProvider>
  );
}

export default EditExpenseStepPage;

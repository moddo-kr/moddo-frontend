import { useLoaderData } from 'react-router';
import { FormProvider } from 'react-hook-form';
import { Close } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import useUpdateExpense from '@/common/queries/expense/useUpdateExpense';
import FormCard from '@/pages/createBill/components/FormCard';
import useAddExpenseFormArray from '@/pages/createBill/hooks/useAddExpenseFormArray';
import DescriptionField from '@/common/components/DescriptionField';
import Text from '@/common/components/Text';
import Button from '@/common/components/Button';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import { showToast } from '@/common/components/Toast';
import * as S from './index.styles';
import { EditBillContext } from '../types/funnel.type';

type EditExpenseStepProps = {
  onNext: () => void;
  onBack: () => void;
} & EditBillContext;

function EditExpenseStep({
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

export default EditExpenseStep;

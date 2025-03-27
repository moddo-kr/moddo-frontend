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
  const mutation = useUpdateExpense({ onNext, groupToken });

  const { handleSubmit, formState } = formMethods;
  const allFormsValid = formState.isValid;

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
        <Button
          onClick={handleSubmit((data) =>
            mutation.mutate({
              groupToken,
              data: data.expenses[0],
              expenseId,
            })
          )}
          disabled={!allFormsValid}
        >
          수정 완료
        </Button>
      </BottomButtonContainer>
    </FormProvider>
  );
}

export default EditExpenseStep;

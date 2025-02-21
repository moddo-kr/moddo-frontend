import { useLoaderData } from 'react-router';
import { FormProvider } from 'react-hook-form';
import { Close } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import useUpdateExpense from '@/common/queries/expense/useUpdateExpense';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import FormCard from '@/pages/createBill/components/FormCard';
import { BillContext } from '@/pages/createBill/types/billContext.type';
import { SingleExpenseForm } from '@/pages/createBill/types/expense.type';
import useAddExpenseFormArray from '@/pages/createBill/hooks/useAddExpenseFormArray';
import DescriptionField from '@/common/components/DescriptionField';
import Text from '@/common/components/Text';
import Button from '@/common/components/Button';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
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
  const { groupInfo, formMethods, fieldArrayReturns, setGroupInfo } =
    useAddExpenseFormArray(initialExpense);
  const { groupToken } = useLoaderData();
  const mutation = useUpdateExpense({ moveToNextStep, groupToken });

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
        leftButtonOnClick={() => moveToNextStep?.()}
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
          <FormCard
            key={field.id}
            ref={null}
            index={index}
            setGroupInfo={setGroupInfo}
          />
        ))}
      </S.BillFormList>
      <BottomButtonContainer $bgColor="semantic.background.normal.alternative">
        <Button
          onClick={handleSubmit((data) =>
            mutation.mutate({
              groupToken,
              data: data.expenses[0],
              expenseId: id,
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

import { useLoaderData } from 'react-router';
import { Close } from '@/assets/svgs/icon';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import useCreateExpense from '@/common/queries/expense/useCreateExpense';
import { BillContext } from '@/pages/createBill/types/billContext.type';
import useAddExpenseFormArray from '@/pages/createBill/hooks/useAddExpenseFormArray';
import { FormProvider } from 'react-hook-form';
import Header from '@/common/components/Header';
import FormCard from '@/pages/createBill/components/FormCard';
import Button from '@/common/components/Button';
import { BottomButtonContainer } from '@/styles/bottomButton.styles';
import DescriptionField from '@/common/components/DescriptionField';
import Text from '@/common/components/Text';
import * as S from './index.styles';

interface AddExpenseStepProps
  extends BaseFunnelStepComponentProps<BillContext> {}

function AddExpenseStep({ moveToNextStep }: AddExpenseStepProps) {
  const { groupInfo, formMethods, fieldArrayReturns } =
    useAddExpenseFormArray();
  const { groupToken } = useLoaderData();
  const mutation = useCreateExpense({ moveToNextStep, groupToken });

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
          <FormCard key={field.id} ref={null} index={index} />
        ))}
      </S.BillFormList>
      <BottomButtonContainer $bgColor="semantic.background.normal.alternative">
        <Button
          onClick={handleSubmit((data) =>
            mutation.mutate({ groupToken, data })
          )}
          disabled={!allFormsValid}
        >
          지출 추가
        </Button>
      </BottomButtonContainer>
    </FormProvider>
  );
}

export default AddExpenseStep;

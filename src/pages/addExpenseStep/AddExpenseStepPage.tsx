import { useLoaderData } from 'react-router';
import { Close } from '@/shared/assets/svgs/icon';
import useAddExpenseFormArray from '@/features/expense-management/lib/useAddExpenseFormArray';
import { FormProvider } from 'react-hook-form';
import Header from '@/shared/ui/Header';
import { Button, DescriptionField } from '@/shared/design-system/ui';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import Text from '@/shared/ui/Text';
import useCreateExpense from '@/features/expense-management/api/useCreateExpense';
import FormCard from '@/features/expense-management/ui/FormCard';
import * as S from './AddExpenseStepPage.styles';

interface AddExpenseStepProps {
  onNext: () => void;
}

function AddExpenseStepPage({ onNext }: AddExpenseStepProps) {
  const { groupInfo, formMethods, fieldArrayReturns } =
    useAddExpenseFormArray();
  const { groupToken } = useLoaderData();
  const mutation = useCreateExpense({ onNext, groupToken });

  const { handleSubmit, formState } = formMethods;
  const allFormsValid = formState.isValid;

  if (!groupInfo) {
    return null;
  }

  return (
    <FormProvider {...formMethods}>
      <Header
        type="default"
        headingIcon={<Close width={24} />}
        headingIconAriaLabel="지출 입력 완료"
        onHeadingIconClick={onNext}
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
      <S.ExpenseFormList>
        {fieldArrayReturns.fields.map((field, index) => (
          <FormCard key={field.id} ref={null} index={index} />
        ))}
      </S.ExpenseFormList>
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

export default AddExpenseStepPage;

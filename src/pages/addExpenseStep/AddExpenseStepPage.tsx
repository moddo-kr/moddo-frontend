import { useLoaderData } from 'react-router';
import { Close } from '@/shared/assets/svgs/icon';
import useCreateExpense from '@/shared/api/expense/useCreateExpense';
import useAddExpenseFormArray from '@/shared/hooks/useAddExpenseFormArray';
import { FormProvider } from 'react-hook-form';
import Header from '@/shared/ui/Header';
import FormCard from '@/shared/ui/FormCard';
import Button from '@/shared/ui/Button';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import DescriptionField from '@/shared/ui/DescriptionField';
import Text from '@/shared/ui/Text';
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
        type="TitleCenter"
        leftButtonContent={<Close width={24} />}
        leftButtonOnClick={onNext}
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

export default AddExpenseStepPage;

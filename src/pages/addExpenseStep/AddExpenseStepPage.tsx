import { useLoaderData } from 'react-router';
import { Close } from '@/shared/assets/svgs/icon';
import useAddExpenseFormArray from '@/features/expense-management/lib/useAddExpenseFormArray';
import { FormProvider } from 'react-hook-form';
import {
  ActionArea,
  DescriptionField,
  Header,
} from '@/shared/design-system/ui';
import { PageLayout } from '@/shared/ui/PageLayout';
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
      <PageLayout>
        <Header
          type="default"
          headingIcon={<Close width={24} />}
          headingIconAriaLabel="지출 입력 완료"
          onHeadingIconClick={onNext}
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
          mainAction={{
            label: '지출 추가',
            onClick: handleSubmit((data) =>
              mutation.mutate({ groupToken, data })
            ),
            disabled: !allFormsValid,
          }}
        />
      </PageLayout>
    </FormProvider>
  );
}

export default AddExpenseStepPage;

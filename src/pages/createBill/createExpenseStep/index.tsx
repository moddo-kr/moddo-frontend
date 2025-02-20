import { useLayoutEffect, useRef, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import { Close } from '@/assets/svgs/icon';
import { ROUTE } from '@/common/constants/route';
import Button from '@/common/components/Button';
import Header from '@/common/components/Header';
import Text from '@/common/components/Text';
import DescriptionField from '@/common/components/DescriptionField';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import useCreateExpense from '@/common/queries/expense/useCreateExpense';
import FormCard from '@/pages/createBill/components/FormCard';
import useAddExpenseFormArray from '@/pages/createBill/hooks/useAddExpenseFormArray';
import getTotalExpense from '@/pages/createBill/utils/getTotalExpense';
import { BillContext } from '@/pages/createBill/types/billContext.type';
import Modal from '@/common/components/Modal';
import * as S from './index.styles';

interface CreateExpenseStepProps
  extends BaseFunnelStepComponentProps<BillContext> {}

function CreateExpenseStep({ moveToNextStep }: CreateExpenseStepProps) {
  const lastFormCardRef = useRef<HTMLDivElement | null>(null);
  const mutation = useCreateExpense({ moveToNextStep });
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { groupToken } = useLoaderData();
  const { groupInfo, formMethods, defaultFormValue, fieldArrayReturns } =
    useAddExpenseFormArray();

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
        rightButtonContent={<Text>지출 추가</Text>}
        rightButtonOnClick={handleAddExpense}
        leftButtonOnClick={() => setOpen(true)}
      />
      {open && (
        <Modal
          open={open}
          setOpen={setOpen}
          variant="default"
          title="지출 내역 입력을 종료할까요?"
          subscribe="입력한 내용은 사라지지만, 모임이 생성되어 있어 나중에 다시 추가할 수 있어요."
          cancel="계속 입력"
          submit="끝내기"
          onCancel={() => setOpen(false)}
          onSubmit={() => {
            setOpen(false);
            navigate(ROUTE.home);
          }}
        />
      )}
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
        <Button
          type="button"
          onClick={handleSubmit((data) =>
            mutation.mutate({ groupToken, data })
          )}
          disabled={!allFormsValid}
        >
          {`총 ${getTotalExpense(expenses).toLocaleString()}원`}
        </Button>
      </S.ButtonWrapper>
    </FormProvider>
  );
}

export default CreateExpenseStep;

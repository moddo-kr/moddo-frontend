import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Close } from '@/assets/svgs/icon';
import Header from '@/common/components/Header';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { Group } from '@/common/types/group.type';
import useCreateExpense from '@/common/queries/expense/useCreateExpense';
import {
  Expense,
  ExpenseFormSchema,
} from '@/pages/createBill/types/expense.type';
import group from '@/service/apis/group';
import BillFormCard from './components/FormCard';
import getTotalExpense from '../utils/getTotalExpense';
import { BillContext } from '../types/billContext.type';
import * as S from './index.styles';

const defaultValues: Omit<Expense, 'id'> = {
  amount: 0,
  content: '',
  date: new Date(),
  memberExpenses: [],
};

interface AddExpenseStepProps
  extends BaseFunnelStepComponentProps<BillContext> {}

function AddExpenseStep({ moveToNextStep }: AddExpenseStepProps) {
  const lastFormCardRef = useRef<HTMLDivElement | null>(null);
  const [groupInfo, setGroupInfo] = useState<Group | null>(null);
  const mutation = useCreateExpense({ moveToNextStep });
  const formMethods = useForm({
    resolver: zodResolver(ExpenseFormSchema),
    mode: 'onChange', // 폼들의 필수 입력값이 모두 입력되었을 때 '다음' 버튼을 활성화시키기 위함
    defaultValues: async () => {
      // TODO : groupToken을 받아오는 로직 추가
      const groupData = await group.get('groupToken');
      setGroupInfo(groupData);
      return {
        expenses: [
          {
            ...defaultValues,
            memberExpenses: groupData.members.map((member) => ({
              memberId: member.id,
              name: member.name,
              amount: 0,
            })),
          },
        ],
      };
    },
  });
  // TODO : 리팩토링 필요할듯...
  const defaultFormValue = useMemo(() => {
    if (!groupInfo) {
      return defaultValues;
    }
    return {
      ...defaultValues,
      memberExpenses: groupInfo.members.map((member) => ({
        memberId: member.id,
        name: member.name,
        amount: 0,
      })),
    };
  }, [groupInfo]);
  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: 'expenses',
  });
  useLayoutEffect(() => {
    // form의 개수가 변경되면 (추가, 삭제) 마지막 form으로 스크롤 이동
    lastFormCardRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [fields.length]);

  const { handleSubmit, formState, watch } = formMethods;
  const allFormsValid = formState.isValid;
  const expenses = watch('expenses');

  const handleAddExpense = () => {
    // 기본 focus 기능을 사용하지 않고 새로운 폼 추가
    append(defaultFormValue, { shouldFocus: false });
  };

  const handleDeleteExpense = (index: number) => {
    remove(index);
  };

  if (!groupInfo) {
    return null;
  }

  return (
    <FormProvider {...formMethods}>
      <Header
        type="TitleCenter"
        leftButtonContent={<Close width="1.5rem" />}
        rightButtonContent={<S.AddExpenseButton>지출 추가</S.AddExpenseButton>}
        rightButtonOnClick={handleAddExpense}
      />
      <S.TopWrapper>
        <S.TopMessage>
          <S.MoimName>{groupInfo.groupName}</S.MoimName>
          {`의\n지출 내역을 입력해주세요.`}
        </S.TopMessage>
      </S.TopWrapper>
      <S.BillFormList>
        {fields.map((field, index) => (
          <BillFormCard
            key={field.id}
            ref={index === fields.length - 1 ? lastFormCardRef : null}
            index={index}
            onDelete={handleDeleteExpense}
          />
        ))}
      </S.BillFormList>
      <S.ButtonWrapper>
        <S.BottomButton
          type="button"
          onClick={handleSubmit((data) =>
            // TODO : 그룹 토큰을 받아오는 로직 추가
            mutation.mutate({ groupToken: 'group-token', data })
          )}
          disabled={!allFormsValid}
        >
          {`총 ${getTotalExpense(expenses).toLocaleString()}원`}
        </S.BottomButton>
      </S.ButtonWrapper>
    </FormProvider>
  );
}

export default AddExpenseStep;

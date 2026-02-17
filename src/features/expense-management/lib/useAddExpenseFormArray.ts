import { useMemo } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import { format } from 'date-fns';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SingleExpenseForm,
  ExpenseFormSchema,
} from '@/entities/expense/model/expense.type';
import { Group } from '@/entities/group/model/group.type';

const defaultValues: SingleExpenseForm = {
  amount: 0,
  content: '',
  date: format(new Date(), 'yyyy-MM-dd'),
  memberExpenses: [],
};

/**
 * 지출 폼을 위한 커스텀 훅
 */
const useAddExpenseFormArray = (initialExpense?: SingleExpenseForm) => {
  const { groupData } = useLoaderData() as { groupData: Group };
  const formMethods = useForm({
    resolver: zodResolver(ExpenseFormSchema),
    mode: 'onChange', // 폼들의 필수 입력값이 모두 입력되었을 때 '다음' 버튼을 활성화시키기 위함
    defaultValues: async () => {
      // 기본 데이터가 있는 경우 (ex. 수정)
      if (initialExpense) {
        return {
          expenses: [initialExpense],
        };
      }
      // 기본 데이터가 없는 경우 (ex. 추가)
      return {
        expenses: [
          {
            ...defaultValues,
            memberExpenses: groupData.members.map((member) => ({
              id: member.id,
              name: member.name,
              amount: 0,
              profile: member.profile,
              role: member.role,
            })),
          },
        ],
      };
    },
  });

  const defaultFormValue = useMemo(() => {
    if (!groupData) {
      return defaultValues;
    }
    return {
      ...defaultValues,
      memberExpenses: groupData.members.map((member) => ({
        id: member.id,
        name: member.name,
        amount: 0,
        profile: member.profile,
        role: member.role,
      })),
    };
  }, [groupData]);

  const fieldArrayReturns = useFieldArray({
    control: formMethods.control,
    name: 'expenses',
  });

  return {
    groupInfo: groupData,
    formMethods,
    defaultFormValue,
    fieldArrayReturns,
  };
};

export default useAddExpenseFormArray;

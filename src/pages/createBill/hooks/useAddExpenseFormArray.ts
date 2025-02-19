import { useMemo, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import { format } from 'date-fns';
import { zodResolver } from '@hookform/resolvers/zod';
import { Group } from '@/common/types/group.type';
import {
  SingleExpenseForm,
  ExpenseFormSchema,
} from '@/pages/createBill/types/expense.type';
import group from '@/service/apis/group';

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
  const { groupToken } = useLoaderData();
  const [groupInfo, setGroupInfo] = useState<Group | null>(null);
  const formMethods = useForm({
    resolver: zodResolver(ExpenseFormSchema),
    mode: 'onChange', // 폼들의 필수 입력값이 모두 입력되었을 때 '다음' 버튼을 활성화시키기 위함
    defaultValues: async () => {
      const groupData = await group.get(groupToken);
      setGroupInfo(groupData);
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
              memberId: member.id,
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
    if (!groupInfo) {
      return defaultValues;
    }
    return {
      ...defaultValues,
      memberExpenses: groupInfo.members.map((member) => ({
        memberId: member.id,
        name: member.name,
        amount: 0,
        profile: member.profile,
        role: member.role,
      })),
    };
  }, [groupInfo]);
  const fieldArrayReturns = useFieldArray({
    control: formMethods.control,
    name: 'expenses',
  });

  return {
    groupInfo,
    formMethods,
    defaultFormValue,
    fieldArrayReturns,
  };
};

export default useAddExpenseFormArray;

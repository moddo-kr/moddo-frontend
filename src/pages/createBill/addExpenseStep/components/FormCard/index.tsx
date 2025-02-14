import { forwardRef, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Close } from '@/assets/svgs/icon';
import distributeAmount from '@/pages/createBill/utils/distributeExpense';
import { ExpenseMember } from '@/pages/createBill/types/expense.type';
import BillDatePicker from '@/pages/createBill/addExpenseStep/components/DatePicker';
import FormField from '@/pages/createBill/addExpenseStep/components/FormField';
import NumPadBottomSheet from '@/pages/createBill/addExpenseStep/components/NumPadBottomSheet';
import MemberBottomSheet from '@/pages/createBill/addExpenseStep/components/MemberBottomSheet';
import MemberChips from '@/pages/createBill/addExpenseStep/components/MemberChips';
import * as S from './index.styles';
import 'react-datepicker/dist/react-datepicker.css';

interface FormCardProps {
  index: number;
  onDelete: (index: number) => void; // 폼 삭제 버튼 클릭 시 호출되는 함수
}

const FormCard = forwardRef<HTMLDivElement, FormCardProps>(
  ({ index, onDelete }, ref) => {
    const { register, watch, setValue, control } = useFormContext();
    const [openNumPad, setOpenNumPad] = useState(false);
    const [openMemberSheet, setOpenMemberSheet] = useState(false);

    const amount = watch(`expenses.${index}.amount`);
    const memberExpenses = watch(`expenses.${index}.memberExpenses`);

    useEffect(() => {
      if (!amount || !memberExpenses) return;
      if (amount && memberExpenses && memberExpenses.length > 0) {
        // 지출 금액을 참여자 수에 맞게 분배
        const distribution = distributeAmount(amount, memberExpenses.length);
        const updatedMemberExpenses = memberExpenses.map(
          (member: ExpenseMember, idx: number) => ({
            ...member,
            amount: distribution[idx],
          })
        );

        // 참여자별 지출 금액이 변경된 경우에만 업데이트
        if (
          JSON.stringify(updatedMemberExpenses) !==
          JSON.stringify(memberExpenses)
        ) {
          setValue(`expenses.${index}.memberExpenses`, updatedMemberExpenses, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
      }
    }, [amount, index, memberExpenses, setValue]);

    return (
      <>
        <S.FormCard ref={ref}>
          <S.FormCardTitleContainer>
            <S.FormCardTitle>{index + 1}차</S.FormCardTitle>
            {index > 0 ? (
              <S.FormDeleteButton type="button" onClick={() => onDelete(index)}>
                <Close width="1.5rem" />
              </S.FormDeleteButton>
            ) : null}
          </S.FormCardTitleContainer>
          <FormField
            label="결제 금액"
            required
            control={control}
            name={`expenses.${index}.amount`}
            renderInput={({ field }) => (
              <NumPadBottomSheet
                initialInput={field.value}
                open={openNumPad}
                setOpen={setOpenNumPad}
                setInput={(value) => field.onChange(value)}
              />
            )}
          />
          <FormField
            label="지출 장소 및 내용"
            required
            register={register(`expenses.${index}.content`)}
            name={`expenses.${index}.content`}
            placeholder="ex. 투썸플레이스"
          />
          <FormField
            label="지출일"
            control={control}
            name={`expenses.${index}.date`}
            renderInput={({ field }) => (
              <BillDatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
              />
            )}
          />
          <FormField
            label="참여자"
            name={`expenses.${index}.memberExpenses`}
            control={control}
            subButton={{
              label: '참여자 추가',
              onClick: () => setOpenMemberSheet(true),
            }}
            renderInput={({ field }) => (
              <MemberChips
                members={field.value}
                onDelete={(name) => {
                  const newMembers = field.value.filter(
                    (member: ExpenseMember) => member.name !== name
                  );
                  field.onChange(newMembers);
                }}
              />
            )}
          />
        </S.FormCard>
        <MemberBottomSheet
          open={openMemberSheet}
          setOpen={setOpenMemberSheet}
        />
      </>
    );
  }
);

FormCard.displayName = 'FormCard';

export default FormCard;

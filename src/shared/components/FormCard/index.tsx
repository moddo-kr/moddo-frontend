import { forwardRef, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { format } from 'date-fns';
import { Close } from '@/shared/assets/svgs/icon';
import { ExpenseFormMember, RemainderData } from '@/shared/types/expense.type';
import Alert from '@/shared/components/Alert';
import Button from '@/shared/components/Button';
import BillDatePicker from '@/shared/components/DatePicker';
import Text from '@/shared/components/Text';
import FormField from '@/shared/components/FormField';
import NumPadBottomSheet from '@/shared/components/NumPadBottomSheet';
import MemberExpenses from '@/shared/components/MemberExpenses';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './index.styles';
import distributeAmount from './utils/distributeExpense';

interface FormCardProps {
  index: number;
  onDelete?: (index: number) => void; // 폼 삭제 버튼 클릭 시 호출되는 함수
}

const FormCard = forwardRef<HTMLDivElement, FormCardProps>(
  ({ index, onDelete }, ref) => {
    const { register, watch, setValue, control } = useFormContext();
    const [openNumPad, setOpenNumPad] = useState(false);
    // const [openMemberSheet, setOpenMemberSheet] = useState(false);
    const [remainderData, setRemainderData] = useState<RemainderData | null>(
      null
    );

    const amount = watch(`expenses.${index}.amount`);
    const memberExpenses = watch(`expenses.${index}.memberExpenses`);

    useEffect(() => {
      if (!amount || !memberExpenses) return;
      if (amount && memberExpenses && memberExpenses.length > 0) {
        // 지출 금액을 참여자 수에 맞게 분배
        const { distributeResult, remainder } = distributeAmount(
          amount,
          memberExpenses.length
        );
        const updatedMemberExpenses = memberExpenses.map(
          (member: ExpenseFormMember, idx: number) => ({
            ...member,
            amount: distributeResult[idx],
          })
        );

        // 참여자별 지출 금액이 변경된 경우에만 업데이트
        if (
          JSON.stringify(updatedMemberExpenses) !==
          JSON.stringify(memberExpenses)
        ) {
          // 남은 금액이 있는 경우 해당 금액을 가져가는 사람을 설정
          if (remainder > 0) {
            setRemainderData({
              name: updatedMemberExpenses[0].name,
              remainder,
            });
          } else {
            setRemainderData(null);
          }
          // 전체 분배 금액 업데이트
          setValue(`expenses.${index}.memberExpenses`, updatedMemberExpenses, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
      }
    }, [amount, index, memberExpenses, setValue]);

    return (
      <>
        <S.RefTarget ref={ref} />
        <S.FormCard>
          <S.FormCardTitleContainer>
            <Text variant="title">{index + 1}차</Text>
            {index > 0 ? (
              <Button variant="text" onClick={() => onDelete?.(index)}>
                <Close width="1.5rem" />
              </Button>
            ) : null}
          </S.FormCardTitleContainer>
          <S.FormContainer>
            <FormField
              label="지출 금액"
              required
              control={control}
              name={`expenses.${index}.amount`}
              renderInput={({ field }) => (
                <NumPadBottomSheet
                  initialValue={field.value}
                  open={openNumPad}
                  setOpen={setOpenNumPad}
                  setValue={(value) => field.onChange(value)}
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
                  selected={new Date(field.value)}
                  onChange={(date) =>
                    field.onChange(format(date || new Date(), 'yyyy-MM-dd'))
                  }
                />
              )}
            />
            <FormField
              label="참여자"
              name={`expenses.${index}.memberExpenses`}
              control={control}
              // subButton={{
              //   label: '참여자 추가',
              //   onClick: () => setOpenMemberSheet(true),
              // }}
              renderInput={({ field }) => (
                <>
                  {remainderData ? (
                    <Alert
                      type="info"
                      message={`${remainderData.name}님에게 남은 ${remainderData.remainder}원이 부과됐어요.`}
                    />
                  ) : null}
                  <MemberExpenses
                    members={field.value}
                    onDelete={(name) => {
                      const newMembers = field.value.filter(
                        (member: ExpenseFormMember) => member.name !== name
                      );
                      field.onChange(newMembers);
                    }}
                  />
                </>
              )}
            />
          </S.FormContainer>
        </S.FormCard>
      </>
    );
  }
);

FormCard.displayName = 'FormCard';

export default FormCard;

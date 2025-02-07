import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ExpenseMember } from '@/pages/create/types/expense.type';
import BillDatePicker from '../DatePicker';
import FormField from '../FormField';
import NumPadBottomSheet from '../NumPadBottomSheet';
import MemberChips from '../MemberChips';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './index.styles';

interface FormCardProps {
  index: number;
}

function FormCard({ index }: FormCardProps) {
  const { register, control } = useFormContext();
  const [openNumPad, setOpenNumPad] = useState(false);

  return (
    <S.FormCard>
      <S.FormCardTitle>1차</S.FormCardTitle>
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
          onClick: () => console.log('참여자 추가 바텀시트 등장'),
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
  );
}

export default FormCard;

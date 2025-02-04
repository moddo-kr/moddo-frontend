import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ExpenseMember } from '@/pages/create/types/expense.type';
import BillDatePicker from '../BillDatePicker';
import BillFormField from '../BillFormField';
import NumPadBottomSheet from '../NumPadBottomSheet';
import ParticipantChips from '../ParticipantChips';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './index.styles';

interface BillFormCardProps {
  index: number;
}

function BillFormCard({ index }: BillFormCardProps) {
  const { register, control } = useFormContext();
  const [openNumPad, setOpenNumPad] = useState(false);

  return (
    <S.BillFormCard>
      <S.BillFormCardTitle>1차</S.BillFormCardTitle>
      <BillFormField
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
      <BillFormField
        label="지출 장소 및 내용"
        required
        register={register(`expenses.${index}.content`)}
        name={`expenses.${index}.content`}
        placeholder="ex. 투썸플레이스"
      />
      <BillFormField
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
      <BillFormField
        label="참여자"
        name={`expenses.${index}.memberExpenses`}
        control={control}
        subButton={{
          label: '참여자 추가',
          onClick: () => console.log('참여자 추가 바텀시트 등장'),
        }}
        renderInput={({ field }) => (
          <ParticipantChips
            participants={field.value}
            onDelete={(participantName) => {
              const newParticipants = field.value.filter(
                (participant: ExpenseMember) =>
                  participant.name !== participantName
              );
              field.onChange(newParticipants);
            }}
          />
        )}
      />
    </S.BillFormCard>
  );
}

export default BillFormCard;

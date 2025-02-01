import { useFormContext } from 'react-hook-form';
import BillDatePicker from '../BillDatePicker';
import BillFormField from '../BillFormField';
import ParticipantChips from '../ParticipantChips';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './index.styles';

interface BillFormCardProps {
  index: number;
}

function BillFormCard({ index }: BillFormCardProps) {
  const { register, control } = useFormContext();

  return (
    <S.BillFormCard>
      <S.BillFormCardTitle>1차</S.BillFormCardTitle>
      {/* TODO: Controller */}
      <BillFormField
        label="결제 금액"
        required
        register={register(`bills.${index}.amount`, { valueAsNumber: true })}
        name={`bills.${index}.amount`}
      />
      <BillFormField
        label="지출 장소 및 내용"
        required
        register={register(`bills.${index}.place`)}
        name={`bills.${index}.place`}
        placeholder="ex. 투썸플레이스"
      />
      <BillFormField
        label="지출일"
        control={control}
        name={`bills.${index}.date`}
        renderInput={({ field }) => (
          <BillDatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
          />
        )}
      />
      <BillFormField
        label="참여자"
        name={`bills.${index}.participants`}
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
                (name: string) => name !== participantName
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

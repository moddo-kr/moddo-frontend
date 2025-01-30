import { forwardRef } from 'react';
import { Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import Chip from '@/common/components/Chip';
import BillFormField from './BillFormField';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from '../styles/BillFormCard.styles';

interface BillFormCardProps {
  index: number;
}

type InputProps = React.HTMLProps<HTMLInputElement>;

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onClick, className }, ref) => (
    <Input
      width="100%"
      ref={ref}
      onClick={onClick}
      value={value}
      className={className}
      readOnly
    />
  )
);

FormInput.displayName = 'FormInput';

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
          <S.DatePickerWrapper>
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="yyyy. MM. dd"
              customInput={<FormInput />}
            />
          </S.DatePickerWrapper>
        )}
      />
      <BillFormField
        label="참여자"
        required
        name={`bills.${index}.participants`}
        control={control}
        subButton={{
          label: '참여자 추가',
          onClick: () => console.log('참여자 추가 바텀시트 등장'),
        }}
        renderInput={({ field }) => (
          <S.ChipContainer>
            {field.value.map((participantName: string) => (
              <Chip
                key={participantName}
                label={participantName}
                closable
                onClose={() =>
                  field.onChange(
                    field.value.filter(
                      (name: string) => name !== participantName
                    )
                  )
                }
              />
            ))}
          </S.ChipContainer>
        )}
      />
    </S.BillFormCard>
  );
}

export default BillFormCard;

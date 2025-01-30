import { forwardRef } from 'react';
import { Input } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
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
    />
  )
);

FormInput.displayName = 'FormInput';

function BillFormCard({ index }: BillFormCardProps) {
  const { register, control } = useFormContext();

  return (
    <S.BillFormCard>
      <S.BillFormCardTitle>1차</S.BillFormCardTitle>
      <S.BillFormField required>
        <S.BillFormFieldLabel>
          결제 금액
          <S.BillFormFieldRequired>*</S.BillFormFieldRequired>
        </S.BillFormFieldLabel>
        <S.BillFormFieldInput
          {...register(`bills.${index}.amount`, { valueAsNumber: true })}
        />
        {/* TODO: Controller */}
      </S.BillFormField>
      <S.BillFormField required>
        <S.BillFormFieldLabel>
          지출 장소 및 내용
          <S.BillFormFieldRequired>*</S.BillFormFieldRequired>
        </S.BillFormFieldLabel>
        <S.BillFormFieldInput
          {...register(`bills.${index}.place`)}
          placeholder="ex. 투썸플레이스"
        />
      </S.BillFormField>
      <S.BillFormField>
        <S.BillFormFieldLabel>지출일</S.BillFormFieldLabel>
        <Controller
          name={`bills.${index}.date`}
          control={control}
          render={({ field }) => (
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
      </S.BillFormField>
      <S.BillFormField required>
        <S.BillFormFieldLabel>
          참여자<S.BillFormFieldRequired>*</S.BillFormFieldRequired>
        </S.BillFormFieldLabel>
        <S.BillFormFieldInput {...register(`bills.${index}.participants`)} />
        {/* TODO: Controller */}
      </S.BillFormField>
    </S.BillFormCard>
  );
}

export default BillFormCard;

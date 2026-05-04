import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale/ko';
import { format } from 'date-fns';
import SvgCalendar from '@/shared/assets/svgs/icon/Calendar';
import SvgArrowLeft from '@/shared/assets/svgs/icon/ArrowLeft';
import SvgArrowRight from '@/shared/assets/svgs/icon/ArrowRight';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '../Input';
import * as S from './DatePicker.styles';

interface DatePickerProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  selected?: Date | null;
  onChange: (date: Date | null) => void;
}

interface TriggerProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  placeholder?: string;
}

const DatePickerTrigger = forwardRef<HTMLInputElement, TriggerProps>(
  function DatePickerTrigger(
    { value, onClick, label, required, placeholder, ...rest },
    ref
  ) {
    return (
      <S.TriggerWrapper>
        <Input
          ref={ref}
          label={label}
          required={required}
          placeholder={placeholder}
          value={typeof value === 'string' ? value : ''}
          readOnly
          trailingIcon={<SvgCalendar width={24} height={24} />}
          onClick={onClick}
          {...rest}
        />
      </S.TriggerWrapper>
    );
  }
);

function DatePicker({
  label,
  required,
  placeholder,
  selected,
  onChange,
}: DatePickerProps) {
  return (
    <S.Wrapper>
      <ReactDatePicker
        showPopperArrow={false}
        selected={selected}
        onChange={onChange}
        locale={ko}
        dateFormat="yyyy. MM. dd. (eee)"
        customInput={
          <DatePickerTrigger
            label={label}
            required={required}
            placeholder={placeholder}
          />
        }
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <S.Header>
            <S.NavButton type="button" onClick={decreaseMonth}>
              <SvgArrowLeft width={24} height={24} />
            </S.NavButton>
            <S.HeaderLabel>{format(date, 'yyyy년 M월')}</S.HeaderLabel>
            <S.NavButton type="button" onClick={increaseMonth}>
              <SvgArrowRight width={24} height={24} />
            </S.NavButton>
          </S.Header>
        )}
      />
    </S.Wrapper>
  );
}

export { DatePicker };
export type { DatePickerProps };

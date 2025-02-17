import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale/ko';
import { format } from 'date-fns';
import { ArrowLeft, ArrowRight } from '@/assets/svgs/icon';
import ReadonlyInput from '@/pages/createBill/components/ReadonlyInput';
import * as S from './index.styles';

// react-datepicker - DatePickerProps 참고
interface DatePickerProps {
  selected?: Date | null;
  onChange?: (
    date: Date | null,
    event?: React.MouseEvent | React.KeyboardEvent
  ) => void;
}

function DatePicker({ selected, onChange }: DatePickerProps) {
  return (
    <S.DatePickerWrapper>
      <ReactDatePicker
        showPopperArrow={false}
        selected={selected}
        onChange={onChange}
        locale={ko}
        dateFormat="yyyy. MM. dd. (eee)"
        customInput={<ReadonlyInput />}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <S.Header>
            <S.Arrow onClick={decreaseMonth} type="button">
              <ArrowLeft width="1.5rem" />
            </S.Arrow>
            <div>
              <S.HeaderDate>{format(date, 'yyyy년 M월')}</S.HeaderDate>
            </div>
            <S.Arrow onClick={increaseMonth} type="button">
              <ArrowRight width="1.5rem" />
            </S.Arrow>
          </S.Header>
        )}
      />
    </S.DatePickerWrapper>
  );
}

export default DatePicker;

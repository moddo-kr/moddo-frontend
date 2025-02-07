import ReactDatePicker from 'react-datepicker';
import ReadonlyInput from '../ReadonlyInput';
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
        selected={selected}
        onChange={onChange}
        dateFormat="yyyy. MM. dd"
        customInput={<ReadonlyInput />}
      />
    </S.DatePickerWrapper>
  );
}

export default DatePicker;

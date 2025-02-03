import DatePicker from 'react-datepicker';
import ReadonlyInput from '../ReadonlyInput';
import * as S from './index.styles';

// react-datepicker - DatePickerProps 참고
interface BillDatePickerProps {
  selected?: Date | null;
  onChange?: (
    date: Date | null,
    event?: React.MouseEvent | React.KeyboardEvent
  ) => void;
}

function BillDatePicker({ selected, onChange }: BillDatePickerProps) {
  return (
    <S.DatePickerWrapper>
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="yyyy. MM. dd"
        customInput={<ReadonlyInput />}
      />
    </S.DatePickerWrapper>
  );
}

export default BillDatePicker;

import { useTheme } from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale/ko';
import { format } from 'date-fns';
import { ArrowLeft, ArrowRight, Calendar } from '@/assets/svgs/icon';
import Button from '@/common/components/Button';
import Input from '@/common/components/Input';
import Text from '@/common/components/Text';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './index.styles';

// react-datepicker - DatePickerProps 참고
interface DatePickerProps {
  selected?: Date | null;
  onChange?: (
    date: Date | null,
    event?: React.MouseEvent | React.KeyboardEvent
  ) => void;
  open?: boolean;
}

function DatePicker({ selected, onChange, open }: DatePickerProps) {
  const { unit } = useTheme();

  return (
    <S.DatePickerWrapper>
      <ReactDatePicker
        showPopperArrow={false}
        selected={selected}
        onChange={onChange}
        locale={ko}
        dateFormat="yyyy. MM. dd. (eee)"
        open={open}
        customInput={
          <Input placeholder="" readOnly icon={<Calendar width={unit[24]} />} />
        }
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <S.Header>
            <Button variant="text" onClick={decreaseMonth} type="button">
              <ArrowLeft width={unit[24]} />
            </Button>
            <Text variant="body1Sb">{format(date, 'yyyy년 M월')}</Text>
            <Button variant="text" onClick={increaseMonth} type="button">
              <ArrowRight width={unit[24]} />
            </Button>
          </S.Header>
        )}
      />
    </S.DatePickerWrapper>
  );
}

export default DatePicker;

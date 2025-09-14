import { useTheme } from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale/ko';
import { format } from 'date-fns';
import { ArrowLeft, ArrowRight, Calendar } from '@/shared/assets/svgs/icon';
import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Text from '@/shared/components/Text';
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
          <Input
            placeholder=""
            inputMode="none"
            readOnly
            icon={<Calendar width={unit[24]} />}
          />
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

import { forwardRef } from 'react';
import { Calendar } from '@/assets/svgs/icon';
import * as S from './index.style';

type InputProps = React.HTMLProps<HTMLInputElement>;
const ReadonlyInput = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onClick, className }, ref) => (
    <S.InputContainer>
      <S.CalendarInput
        width="100%"
        ref={ref}
        onClick={onClick}
        value={value}
        className={className}
        readOnly
      />
      <Calendar width="1.5rem" />
    </S.InputContainer>
  )
);
ReadonlyInput.displayName = 'ReadonlyInput';

export default ReadonlyInput;

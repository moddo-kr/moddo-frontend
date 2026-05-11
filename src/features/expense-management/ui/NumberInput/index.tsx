import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './index.styles';

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'lg' | 'sm';
  placeholder: string;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ variant = 'lg', ...props }, ref) => {
    return (
      <S.Container>
        <S.NumberInput
          inputMode="none"
          ref={ref}
          $variant={variant}
          {...props}
        />
        <S.CurrencyUnit $variant={variant}>원</S.CurrencyUnit>
      </S.Container>
    );
  }
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;

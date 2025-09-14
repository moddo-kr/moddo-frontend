import { forwardRef, InputHTMLAttributes } from 'react';
import Text from '@/shared/ui/Text';
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
        <Text
          variant={variant === 'lg' ? 'title' : 'body1Sb'}
          color={
            variant === 'lg' ? 'semantic.text.strong' : 'semantic.text.default'
          }
        >
          원
        </Text>
      </S.Container>
    );
  }
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;

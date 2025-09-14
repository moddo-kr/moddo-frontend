import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import Text from '@/shared/components/Text';
import * as S from './index.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  placeholder: string;
  icon?: ReactElement;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error = false,
      disabled = false,
      required = false,
      icon,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <S.Container onClick={onClick}>
        {label ? (
          <S.LabelField>
            <Text variant="body2R">{label}</Text>
            {required ? (
              <Text variant="body2R" color="semantic.state.danger">
                *
              </Text>
            ) : null}
          </S.LabelField>
        ) : null}
        <S.Wrapper
          $error={error}
          $disabled={disabled}
          className="input-wrapper"
        >
          <S.Input
            autoComplete="off"
            ref={ref}
            disabled={disabled}
            {...props}
          />
          <S.IconWrapper>{icon}</S.IconWrapper>
        </S.Wrapper>
      </S.Container>
    );
  }
);

Input.displayName = 'Input';

export default Input;

import { useId, forwardRef } from 'react';
import type { ReactNode, ChangeEventHandler, InputHTMLAttributes } from 'react';
import * as S from './Input.styles';

type InputState = 'default' | 'error' | 'disabled';
type InputVariant = 'default' | 'price';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  label?: string;
  state?: InputState;
  variant?: InputVariant;
  trailingIcon?: ReactNode;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id: idProp,
    label,
    required = false,
    placeholder,
    state = 'default',
    variant = 'default',
    trailingIcon,
    value,
    onChange,
    ...rest
  },
  ref
) {
  const generatedId = useId();
  const inputId = idProp ?? generatedId;
  const isDisabled = state === 'disabled';
  const isPrice = variant === 'price';

  return (
    <S.Container>
      {label && (
        <S.LabelRow>
          <S.LabelText htmlFor={inputId}>{label}</S.LabelText>
          {required && <S.Required>*</S.Required>}
        </S.LabelRow>
      )}
      <S.InputWrapper $state={state} $variant={variant}>
        <S.StyledInput
          ref={ref}
          id={inputId}
          $variant={variant}
          placeholder={placeholder}
          required={required}
          {...rest}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
        />
        {isPrice && <S.PriceUnit>원</S.PriceUnit>}
        {!isPrice && trailingIcon && (
          <S.IconWrapper $disabled={isDisabled}>{trailingIcon}</S.IconWrapper>
        )}
      </S.InputWrapper>
      {/* TODO: 헬프텍스트 - 디자인 확정 후 추가 예정 */}
    </S.Container>
  );
});

export { Input };
export type { InputProps, InputState, InputVariant };

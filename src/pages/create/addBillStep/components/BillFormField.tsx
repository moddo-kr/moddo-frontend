import { ReactElement } from 'react';
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormRegisterReturn,
  UseFormStateReturn,
} from 'react-hook-form';
import * as S from '../styles/BillFormField.styles';

interface RenderInputProps {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}

interface BillFormFieldProps {
  label: string;
  required?: boolean;
  // react-hook-form의 control과 동일한 타입을 사용하기 위해서 any를 허용함
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<FieldValues, any>;
  name: string;
  register?: UseFormRegisterReturn<string>;
  renderInput?: (props: RenderInputProps) => ReactElement;
  placeholder?: string;
}

function BillFormField({
  label,
  required,
  control,
  name,
  register,
  renderInput,
  placeholder,
}: BillFormFieldProps) {
  return (
    <S.BillFormField required={required}>
      <S.BillFormFieldLabel>
        {label}
        {required && <S.BillFormFieldRequired>*</S.BillFormFieldRequired>}
      </S.BillFormFieldLabel>
      {renderInput ? (
        <Controller
          name={name}
          control={control ?? undefined}
          render={renderInput}
        />
      ) : (
        <S.BillFormFieldInput placeholder={placeholder} {...register} />
      )}
    </S.BillFormField>
  );
}

export default BillFormField;

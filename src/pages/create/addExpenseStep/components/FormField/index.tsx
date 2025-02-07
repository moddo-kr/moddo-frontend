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
import * as S from './index.styles';

interface RenderInputProps {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}

interface SubButtonProps {
  label: string;
  onClick: () => void;
}

interface FormFieldProps {
  label: string;
  required?: boolean;
  // react-hook-form의 control과 동일한 타입을 사용하기 위해서 any를 허용함
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<FieldValues, any>;
  name: string;
  register?: UseFormRegisterReturn<string>;
  renderInput?: (props: RenderInputProps) => ReactElement;
  placeholder?: string;
  subButton?: SubButtonProps;
}

function FormField({
  label,
  required,
  control,
  name,
  register,
  renderInput,
  placeholder,
  subButton,
}: FormFieldProps) {
  return (
    <S.FormField required={required}>
      <S.FormFieldHeader>
        <S.FormFieldLabel>
          {label}
          {required && <S.FormFieldRequired>*</S.FormFieldRequired>}
        </S.FormFieldLabel>
        {subButton && (
          <S.FormFieldSubButton type="button" onClick={subButton.onClick}>
            {subButton.label}
          </S.FormFieldSubButton>
        )}
      </S.FormFieldHeader>
      {renderInput ? (
        <Controller
          name={name}
          control={control ?? undefined}
          render={renderInput}
        />
      ) : (
        <S.FormFieldInput placeholder={placeholder} {...register} />
      )}
    </S.FormField>
  );
}

export default FormField;

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
import { Input } from '@/shared/design-system/ui';
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
}: FormFieldProps) {
  return (
    <S.FormField>
      <S.FormFieldHeader>
        <S.FieldLabel>
          {label}
          {required && <S.RequiredMark>{' *'}</S.RequiredMark>}
        </S.FieldLabel>
        {/* NOTE : 현재 폼 안에서 사용자를 추가하는 기능이 없는 상황이므로 주석처리함. */}
        {/* {subButton && (
          <TextButton onClick={subButton.onClick}>{subButton.label}</TextButton>
        )} */}
      </S.FormFieldHeader>
      {renderInput ? (
        <Controller
          name={name}
          control={control ?? undefined}
          render={renderInput}
        />
      ) : (
        <Input placeholder={placeholder ?? ''} {...register} />
      )}
    </S.FormField>
  );
}

export default FormField;

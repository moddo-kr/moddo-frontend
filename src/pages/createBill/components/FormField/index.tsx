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
import Button from '@/shared/components/Button';
import Text from '@/shared/components/Text';
import Input from '@/shared/components/Input';
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
    <S.FormField>
      <S.FormFieldHeader>
        <Text variant="body2Sb">
          {label}
          {required && (
            <Text variant="body2R" color="semantic.state.danger">
              {' *'}
            </Text>
          )}
        </Text>
        {subButton && (
          <Button variant="text" onClick={subButton.onClick}>
            <Text variant="caption">{subButton.label}</Text>
          </Button>
        )}
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

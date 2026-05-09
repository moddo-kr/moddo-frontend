import type { ReactNode } from 'react';
import * as S from './DescriptionField.styles';

interface DescriptionFieldProps {
  title: string | ReactNode;
  sub?: string | ReactNode;
}

function DescriptionField({ title, sub }: DescriptionFieldProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {sub != null && <S.Sub>{sub}</S.Sub>}
    </S.Container>
  );
}

export { DescriptionField };
export type { DescriptionFieldProps };

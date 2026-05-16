import type { ReactNode } from 'react';
import { ActionArea } from '../ActionArea';
import * as S from './Dialog.styles';

interface DialogAction {
  label: string;
  onClick: () => void;
}

interface DialogProps {
  title: ReactNode;
  description?: ReactNode;
  mainAction: DialogAction;
  alternativeAction?: DialogAction;
}

function Dialog(props: DialogProps) {
  const { title, description, mainAction, alternativeAction } = props;

  return (
    <S.Container>
      <S.TextSection>
        <S.Title>{title}</S.Title>
        {description && <S.Description>{description}</S.Description>}
      </S.TextSection>
      <ActionArea
        layout="horizontal"
        mainAction={mainAction}
        alternativeAction={alternativeAction}
        showBottomSafeArea={false}
        hasHorizontalPadding={false}
      />
    </S.Container>
  );
}

export { Dialog };
export type { DialogProps, DialogAction };

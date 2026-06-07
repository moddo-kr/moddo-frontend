import type { ReactNode } from 'react';
import { ActionArea } from '../ActionArea';
import * as S from './Dialog.styles';

interface DialogAction {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface DialogProps {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  mainAction: DialogAction;
  alternativeAction?: DialogAction;
}

function Dialog(props: DialogProps) {
  const { title, description, children, mainAction, alternativeAction } = props;

  const textSection = (
    <S.TextSection>
      <S.Title>{title}</S.Title>
      {description && <S.Description>{description}</S.Description>}
    </S.TextSection>
  );

  return (
    <S.Container>
      {children ? (
        <S.Section>
          {textSection}
          <S.Content>{children}</S.Content>
        </S.Section>
      ) : (
        textSection
      )}
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

import { ReactElement } from 'react';
import * as S from './index.styles';

interface ShareItemButtonProps {
  icon?: ReactElement;
  text: string;
  onClick: () => void;
}

function ShareItemButton({ icon, text, onClick }: ShareItemButtonProps) {
  return (
    <S.ShareItemButton type="button" onClick={onClick}>
      <S.ShareItemIcon>{icon}</S.ShareItemIcon>
      <S.ShareItemText>{text}</S.ShareItemText>
    </S.ShareItemButton>
  );
}

export default ShareItemButton;

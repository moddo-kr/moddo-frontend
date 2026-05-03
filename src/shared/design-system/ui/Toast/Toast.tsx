import {
  SystemDanger,
  SystemInfo,
  SystemSuccess,
  SystemWarning,
} from '@/shared/assets/svgs/icon';
import * as S from './Toast.styles';

type ToastType = 'success' | 'info' | 'warning' | 'error';

interface ToastProps {
  type: ToastType;
  message: string;
}

const iconMap = {
  success: SystemSuccess,
  info: SystemInfo,
  warning: SystemWarning,
  error: SystemDanger,
} as const;

function Toast({ type, message }: ToastProps) {
  const Icon = iconMap[type];
  return (
    <S.Container>
      <S.IconWrapper>
        <Icon width="100%" height="100%" />
      </S.IconWrapper>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}

export { Toast };
export type { ToastProps, ToastType };

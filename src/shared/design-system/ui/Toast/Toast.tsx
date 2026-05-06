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

const ariaRoleMap: Record<ToastType, 'alert' | 'status'> = {
  success: 'status',
  info: 'status',
  warning: 'alert',
  error: 'alert',
};

function Toast({ type, message }: ToastProps) {
  const Icon = iconMap[type];
  const role = ariaRoleMap[type];

  return (
    <S.Container role={role} aria-atomic="true">
      <S.IconWrapper>
        <Icon width="100%" height="100%" />
      </S.IconWrapper>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}

export { Toast };
export type { ToastProps, ToastType };

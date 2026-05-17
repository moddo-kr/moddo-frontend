import { ReactNode } from 'react';
import {
  SystemDanger,
  SystemInfo,
  SystemSuccess,
  SystemWarning,
} from '@/shared/assets/svgs/icon';
import * as S from './Toast.styles';
import { getToken } from '../../lib/getToken';

type ToastType = 'success' | 'info' | 'warning' | 'error';

interface ToastProps {
  type: ToastType;
  message: string;
}

const iconMap: Record<ToastType, ReactNode> = {
  success: (
    <SystemSuccess
      width="100%"
      height="100%"
      color={getToken('fill.accent-green.normal')}
    />
  ),
  info: (
    <SystemInfo
      width="100%"
      height="100%"
      color={getToken('fill.accent-blue.normal')}
    />
  ),
  warning: (
    <SystemWarning
      width="100%"
      height="100%"
      color={getToken('fill.accent-yellow.normal')}
    />
  ),
  error: (
    <SystemDanger
      width="100%"
      height="100%"
      color={getToken('fill.accent-red.normal')}
    />
  ),
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
      <S.IconWrapper aria-hidden="true">{Icon}</S.IconWrapper>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}

export { Toast };
export type { ToastProps, ToastType };

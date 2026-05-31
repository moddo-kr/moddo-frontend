import type { ReactNode } from 'react';
import {
  SystemInfo,
  SystemDanger,
  SystemWarning,
  SystemSuccess,
} from '@/shared/assets/svgs/icon';
import { getToken } from '../../lib/getToken';
import * as S from './Alert.styles';

type AlertState = 'info' | 'success' | 'warning' | 'danger';
type AlertVariant = 'colored' | 'white';

interface AlertProps {
  state?: AlertState;
  variant?: AlertVariant;
  message: string;
}

const icons: Record<AlertState, ReactNode> = {
  info: (
    <SystemInfo
      width="100%"
      height="100%"
      color={getToken('fill.accent-blue.normal')}
    />
  ),
  success: (
    <SystemSuccess
      width="100%"
      height="100%"
      color={getToken('fill.accent-green.normal')}
    />
  ),
  warning: (
    <SystemWarning
      width="100%"
      height="100%"
      color={getToken('fill.accent-yellow.normal')}
    />
  ),
  danger: (
    <SystemDanger
      width="100%"
      height="100%"
      color={getToken('fill.accent-red.normal')}
    />
  ),
};

const ariaRoleMap: Record<AlertState, 'alert' | 'status'> = {
  info: 'status',
  success: 'status',
  warning: 'alert',
  danger: 'alert',
};

function Alert({ state = 'info', variant = 'colored', message }: AlertProps) {
  const role = ariaRoleMap[state];

  return (
    <S.Container
      $state={state}
      $variant={variant}
      role={role}
      aria-atomic="false"
    >
      <S.IconWrapper>{icons[state]}</S.IconWrapper>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}

export { Alert };
export type { AlertProps, AlertState, AlertVariant };

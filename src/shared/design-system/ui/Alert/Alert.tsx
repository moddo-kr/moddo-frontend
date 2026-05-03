import {
  SystemInfo,
  SystemDanger,
  SystemWarning,
  SystemSuccess,
} from '@/shared/assets/svgs/icon';
import * as S from './Alert.styles';

type AlertState = 'info' | 'success' | 'warning' | 'danger';
type AlertVariant = 'colored' | 'white';

interface AlertProps {
  state?: AlertState;
  variant?: AlertVariant;
  message: string;
}

const icons: Record<AlertState, React.ReactNode> = {
  info: <SystemInfo width="100%" height="100%" />,
  success: <SystemSuccess width="100%" height="100%" />,
  warning: <SystemWarning width="100%" height="100%" />,
  danger: <SystemDanger width="100%" height="100%" />,
};

function Alert({ state = 'info', variant = 'colored', message }: AlertProps) {
  return (
    <S.Container $state={state} $variant={variant}>
      <S.IconWrapper>{icons[state]}</S.IconWrapper>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}

export { Alert };
export type { AlertProps, AlertState, AlertVariant };

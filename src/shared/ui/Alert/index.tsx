import { ReactNode } from 'react';
import {
  SystemInfo,
  SystemDanger,
  SystemSuccess,
  SystemWarning,
} from '@/shared/assets/svgs/icon';
import Text from '@/shared/ui/Text';
import { AlertType, AlertVariant } from './index.type';
import * as S from './index.styles';

const alertIcons: Record<AlertType, ReactNode> = {
  info: <SystemInfo width="1.25rem" />,
  danger: <SystemDanger width="1.25rem" />,
  success: <SystemSuccess width="1.25rem" />,
  warning: <SystemWarning width="1.25rem" />,
};

interface AlertProps {
  type: AlertType;
  variant?: AlertVariant;
  message: string;
}

function Alert({ type, variant = 'colored', message }: AlertProps) {
  return (
    <S.AlertWrapper $type={type} $variant={variant}>
      {alertIcons[type]}
      <Text variant="body2R" color="semantic.text.strong">
        {message}
      </Text>
    </S.AlertWrapper>
  );
}

export default Alert;

import Text from '@/common/components/Text';
import {
  SystemDanger,
  SystemInfo,
  SystemSuccess,
  SystemWarning,
} from '@/assets/svgs/icon';
import * as S from './index.style';
import { useTheme } from 'styled-components';

interface ToastProps {
  type: 'info' | 'error' | 'success' | 'warning';
  content: string;
}

function Toast({ type, content }: ToastProps) {
  const theme = useTheme();
  let IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>> | null =
    null;

  switch (type) {
    case 'info':
      IconComponent = () => <SystemInfo />;
      break;
    case 'error':
      IconComponent = () => <SystemDanger />;
      break;
    case 'success':
      IconComponent = () => <SystemSuccess />;
      break;
    case 'warning':
      IconComponent = () => <SystemWarning />;
      break;
    default:
      IconComponent = null;
      break;
  }

  return (
    <S.Wrapper>
      {IconComponent && (
        <IconComponent width={theme.unit[20]} height={theme.unit[20]} />
      )}
      <Text variant="body2R" color="primitive.base.white">
        {content}
      </Text>
    </S.Wrapper>
  );
}

export default Toast;

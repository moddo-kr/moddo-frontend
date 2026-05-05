import { useTheme } from 'styled-components';
import { Close } from '@/shared/assets/svgs/icon';
import { TextButton } from '@/shared/design-system/ui';
import Text from '@/shared/ui/Text';
import * as S from './index.styles';

interface TagProps {
  label: string;
  onClose: () => void;
}

function Tag({ label, onClose }: TagProps) {
  const { color, unit } = useTheme();

  return (
    <S.Container>
      <Text variant="caption">{label}</Text>
      <TextButton onClick={onClose}>
        <Close width={unit[16]} fill={color.semantic.icon.default} />
      </TextButton>
    </S.Container>
  );
}

export default Tag;

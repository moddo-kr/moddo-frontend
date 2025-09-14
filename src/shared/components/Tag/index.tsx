import { useTheme } from 'styled-components';
import { Close } from '@/shared/assets/svgs/icon';
import Button from '@/shared/components/Button';
import Text from '@/shared/components/Text';
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
      <Button variant="text" onClick={onClose}>
        <Close width={unit[16]} fill={color.semantic.icon.default} />
      </Button>
    </S.Container>
  );
}

export default Tag;

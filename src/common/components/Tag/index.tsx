import { useTheme } from 'styled-components';
import { Close } from '@/assets/svgs/icon';
import Button from '@/common/components/Button';
import Text from '@/common/components/Text';
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

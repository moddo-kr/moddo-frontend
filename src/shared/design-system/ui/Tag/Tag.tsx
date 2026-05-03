import { Close } from '@/shared/assets/svgs/icon';
import * as S from './Tag.styles';

interface TagProps {
  label: string;
  onClose?: () => void;
}

function Tag(props: TagProps) {
  const { label, onClose } = props;

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      {onClose && (
        <S.CloseButton
          type="button"
          onClick={onClose}
          aria-label={`${label} 태그 닫기`}
        >
          <Close width="100%" />
        </S.CloseButton>
      )}
    </S.Container>
  );
}

export { Tag };
export type { TagProps };

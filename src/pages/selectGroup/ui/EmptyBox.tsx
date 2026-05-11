import { CheckCircle } from '@/shared/assets/svgs/icon';
import theme from '@/shared/styles/theme';
import * as S from './EmptyBox.styles';

function EmptyBox() {
  return (
    <S.EmptyBox>
      <S.EmptyBoxContent>
        <CheckCircle
          width={30}
          height={30}
          fill={theme.color.semantic.icon.disabled}
        />
        <S.EmptyBoxMessage>기존 모임이 없어요.</S.EmptyBoxMessage>
      </S.EmptyBoxContent>
    </S.EmptyBox>
  );
}

export default EmptyBox;

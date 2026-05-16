import { CheckCircle } from '@/shared/assets/svgs/icon';
import { getToken } from '@/shared/design-system';
import * as S from './EmptyBox.styles';

function EmptyBox() {
  return (
    <S.EmptyBox>
      <S.EmptyBoxContent>
        <CheckCircle
          width={36}
          height={36}
          color={getToken('fg.normal-disable')}
        />
        <S.EmptyBoxMessage>기존 모임이 없어요.</S.EmptyBoxMessage>
      </S.EmptyBoxContent>
    </S.EmptyBox>
  );
}

export default EmptyBox;

import { useUnregister } from '../../api/useUnregister';
import * as S from './index.styles';

function UnregisterButton() {
  const { mutate: unregister, isPending } = useUnregister();

  return (
    <S.Button onClick={() => unregister()} disabled={isPending}>
      {isPending ? '탈퇴 중...' : '회원 탈퇴'}
    </S.Button>
  );
}

export default UnregisterButton;

import { useLogout } from '../../api/useLogout';
import * as S from './index.styles';

function LogoutButton() {
  const { mutate: logout, isPending } = useLogout();

  return (
    <S.Button onClick={() => logout()} disabled={isPending}>
      {isPending ? '로그아웃 중...' : '로그아웃'}
    </S.Button>
  );
}

export default LogoutButton;

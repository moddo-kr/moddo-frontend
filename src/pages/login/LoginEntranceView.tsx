import { useTheme } from 'styled-components';
import EntranceModdo from '@/shared/assets/pngs/EntranceModdo.png';
import { LogoIcon } from '@/shared/assets/svgs';
import { Header } from '@/shared/design-system/ui';
import * as S from './LoginEntranceView.styles';

// 로그인 페이지 전에 잠시 보여지는 진입 페이지
function LoginEntranceView() {
  const theme = useTheme();
  return (
    <S.EntranceContainer>
      <Header type="1depth" bgColor={theme.color.semantic.orange.subtle} />
      <S.LogoSection>
        <LogoIcon width={187} fill={theme.color.semantic.orange.default} />
        <S.EntranceTagline>모또와 함께라면 정산 걱정 끝!</S.EntranceTagline>
      </S.LogoSection>
      <S.ImgContainer>
        <S.EntranceImg src={EntranceModdo} alt="EntranceImg" />
      </S.ImgContainer>
    </S.EntranceContainer>
  );
}
export default LoginEntranceView;

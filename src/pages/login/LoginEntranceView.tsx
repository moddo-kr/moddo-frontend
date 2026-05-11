import { useTheme } from 'styled-components';
import EntranceModdo from '@/shared/assets/pngs/EntranceModdo.png';
import Flex from '@/shared/ui/Flex';
import { LogoIcon } from '@/shared/assets/svgs';
import { Header } from '@/shared/design-system/ui';
import * as S from './LoginEntranceView.styles';

// 로그인 페이지 전에 잠시 보여지는 진입 페이지
function LoginEntranceView() {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      bgColor={theme.color.semantic.orange.subtle}
      flexGrow={1}
      gap={16}
    >
      <Header type="1depth" bgColor={theme.color.semantic.orange.subtle} />
      <Flex direction="column" alignItems="center">
        <LogoIcon width={187} fill={theme.color.semantic.orange.default} />
        <S.EntranceTagline>모또와 함께라면 정산 걱정 끝!</S.EntranceTagline>
      </Flex>
      <S.ImgContainer>
        <S.EntranceImg src={EntranceModdo} alt="EntranceImg" />
      </S.ImgContainer>
    </Flex>
  );
}
export default LoginEntranceView;

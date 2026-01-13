import { useTheme } from 'styled-components';
import LogoImg from '@/shared/assets/pngs/LogoImg.png';
import EntranceModdo from '@/shared/assets/pngs/EntranceModdo.png';
import Flex from '@/shared/ui/Flex';
import { CoinLottie } from '@/shared/ui/Lottie';
import Text from '@/shared/ui/Text';
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
      <Flex direction="column" alignItems="center">
        <S.LogoImg src={LogoImg} alt="logo" />
        <Text variant="body1R" color="semantic.text.strong">
          모또와 함께라면 정산 걱정 끝!
        </Text>
      </Flex>
      <S.ImgContainer>
        <CoinLottie />
        <S.EntranceImg src={EntranceModdo} alt="EntranceImg" />
      </S.ImgContainer>
    </Flex>
  );
}
export default LoginEntranceView;

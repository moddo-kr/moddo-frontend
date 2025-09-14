import Text from '@/common/components/Text';
import LoginSuccessImg from '@/assets/pngs/LoginSuccessImg.png';
import { ROUTE } from '@/common/constants/route';
import { useNavigate } from 'react-router';
import Flex from '@/common/components/Flex';
import * as S from './LoginSuccessPage.style';
import { BottomButton, BottomWrapper } from '../login/LoginPage.style';

function LoginSuccessPage() {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      alignItems="center"
      flexGrow={1}
      position="relative"
    >
      <S.TitleWrapper>
        <Text variant="heading2" textAlign="center">
          반가워요!
          <br />
          이제 정산을 시작해볼까요?
        </Text>
      </S.TitleWrapper>
      <S.ImgWrapper>
        <S.LogoImg src={LoginSuccessImg} alt="loginSuccessImg" />
      </S.ImgWrapper>
      <BottomWrapper>
        <BottomButton color="#ffffff" onClick={() => navigate(ROUTE.home)}>
          홈으로 가기
        </BottomButton>
      </BottomWrapper>
    </Flex>
  );
}

export default LoginSuccessPage;

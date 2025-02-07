import { Flex, Text } from '@chakra-ui/react';
import LoginSuccessImg from '@/assets/pngs/LoginSuccessImg.png';
import * as S from './index.style';
import { BottomButton, BottomWrapper } from '../login/index.style';
import { ROUTE } from '@/common/constants/route';
import { useNavigate } from 'react-router';

function LoginSuccess() {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      alignItems="center"
      flexGrow={1}
      position="relative"
    >
      <S.TitleWrapper>
        <Text
          fontSize={20}
          lineHeight={1.5}
          fontWeight={700}
          whiteSpace={'pre-wrap'}
          textAlign={'center'}
        >
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

export default LoginSuccess;

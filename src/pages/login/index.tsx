import LogoImg from '@/assets/pngs/LogoImg.png';
import LoginHamImg from '@/assets/pngs/LoginHamImg.png';
import { Button, Flex, Text } from '@chakra-ui/react';
import * as S from './index.style';

function Login() {
  return (
    <Flex direction="column" alignItems="center">
      <S.TitleWrapper>
        <S.LogoImg src={LogoImg} alt="logo" />
        <Text fontSize={4} lineHeight={150} fontWeight={400}>
          모또에 모여 빠르고 즐겁게 정산을 할 수 있어요.
        </Text>
      </S.TitleWrapper>
      <S.LoginImg src={LoginHamImg} alt="loginImg" />
      <Flex direction="column" gap={3} px={5} mt={3} mb={7}>
        <Button bgColor="#FAE100" fontWeight={600}>
          카카오로 로그인
        </Button>
        <Button bgColor="#E2E2E2" fontWeight={600}>
          비회원으로 진행
        </Button>
      </Flex>
      <Text fontSize={3} lineHeight={150}>
        회원가입 시 서비스 이용약관과
        <br />
        개인정보 수집 및 이용에 동의하게 됩니다.
      </Text>
    </Flex>
  );
}

export default Login;

import LogoImg from '@/assets/pngs/LogoImg.png';
import LoginHamImg from '@/assets/pngs/LoginHamImg.png';
import { Flex } from '@chakra-ui/react';
import Text from '@/common/components/Text';
import { useNavigate } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import { useGetGuestToken } from '@/common/queries/auth/useGetGuestToken';
import * as S from './index.style';
import { useEffect, useState } from 'react';
import { CoinLottie } from '@/common/components/Lottie';
import EntranceModdo from '@/assets/pngs/EntranceModdo.png';
import theme from '@/styles/theme';

function Login() {
  const { refetch: getGuestToken } = useGetGuestToken();
  const navigate = useNavigate();
  const [isEntrance, setIsEntrance] = useState(true);

  const handleLoginButtonClick = (loginType: 'KAKAO' | 'GUEST') => {
    const token = localStorage.getItem('accessToken');
    if (loginType === 'KAKAO') {
      console.log('카카오 로그인');
    } else if (!token) {
      getGuestToken();
    } else {
      navigate(ROUTE.selectGroup);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntrance(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (isEntrance) {
    return (
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        bgColor={theme.color.semantic.orange.subtle}
        flexGrow={1}
        gap={theme.unit[16]}
      >
        <S.TextContainer>
        <S.LogoImg src={LogoImg} alt="logo" />
        <Text variant='body1R' color='semantic.text.strong'>모또와 함께라면 정산 걱정 끝!</Text>
        </S.TextContainer>
        <S.ImgContainer>
        <CoinLottie />
        <S.EntranceImg src={EntranceModdo} alt="EntranceImg" />
        </S.ImgContainer>
      </Flex>
    );
  }

  return (
    <Flex direction="column" alignItems="center" bgColor="#FAF6F3" flexGrow={1}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={8}
      >
        <S.TitleWrapper>
          <S.LogoImg src={LogoImg} alt="logo" />
          <Text
            fontSize={16}
            lineHeight={1.5}
            fontWeight={400}
            color="#6F7379"
            whiteSpace="nowrap"
          >
            모또에 모여 빠르고 즐겁게 정산을 할 수 있어요.
          </Text>
        </S.TitleWrapper>
        <S.LoginImg src={LoginHamImg} alt="loginImg" />
      </Flex>
      <S.BottomWrapper>
        <S.BottomButton
          $bgColor="#FAE100"
          onClick={() => handleLoginButtonClick('KAKAO')}
        >
          카카오로 로그인
        </S.BottomButton>
        <S.BottomButton
          $bgColor="#E2E2E2"
          onClick={() => handleLoginButtonClick('GUEST')}
        >
          비회원으로 진행
        </S.BottomButton>
        <Text
          fontSize={12}
          lineHeight={1.5}
          textAlign="center"
          color="#6F7379"
          py={4}
          height="fit-content"
        >
          회원가입 시 서비스 이용약관과
          <br />
          개인정보 수집 및 이용에 동의하게 됩니다.
        </Text>
      </S.BottomWrapper>
    </Flex>
  );
}

export default Login;

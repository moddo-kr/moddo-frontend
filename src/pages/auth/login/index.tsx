import LogoImg from '@/assets/pngs/LogoImg.png';
import { Flex } from '@chakra-ui/react';
import Text from '@/common/components/Text';
import { useNavigate } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import { useGetGuestToken } from '@/common/queries/auth/useGetGuestToken';
import { useEffect, useState } from 'react';
import { CoinLottie } from '@/common/components/Lottie';
import EntranceModdo from '@/assets/pngs/EntranceModdo.png';
import theme from '@/styles/theme';
import Button from '@/common/components/Button';
import { Kakao } from '@/assets/svgs/icon';
import * as S from './index.style';

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
      navigate(ROUTE.onboarding);
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
          <Text variant="body1R" color="semantic.text.strong">
            모또와 함께라면 정산 걱정 끝!
          </Text>
        </S.TextContainer>
        <S.ImgContainer>
          <CoinLottie />
          <S.EntranceImg src={EntranceModdo} alt="EntranceImg" />
        </S.ImgContainer>
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      bgColor="#fff"
      flexGrow={1}
    >
      <S.ContentWrapper>
        <S.TextContainer>
          <S.LogoImg src={LogoImg} alt="logo" />
          <Text variant="body1R" color="semantic.text.subtle">
            모또와 함께라면 정산 걱정 끝!
          </Text>
        </S.TextContainer>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <Button
          style={{
            background: '#FEE500',
          }}
          onClick={() => handleLoginButtonClick('KAKAO')}
          disabled
        >
          <Kakao width={theme.unit[24]} />
          <Text variant="body1Sb" color="semantic.text.strong">
            카카오로 로그인
          </Text>
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleLoginButtonClick('GUEST')}
        >
          <Text variant="body1R" color="semantic.text.strong">
            비회원으로 진행
          </Text>
        </Button>

        <S.TextWrapper>
          <Text color="semantic.text.subtle" variant="caption">
            회원가입 시 서비스 이용약관과
          </Text>
          <Text color="semantic.text.subtle" variant="caption">
            개인정보 수집 및 이용에 동의하게 됩니다.
          </Text>
        </S.TextWrapper>
      </S.ButtonWrapper>
    </Flex>
  );
}

export default Login;

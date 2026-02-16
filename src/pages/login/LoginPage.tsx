import LogoImg from '@/shared/assets/pngs/LogoImg.png';
import Text from '@/shared/ui/Text';
import { useNavigate } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import { useEffect, useState } from 'react';
import theme from '@/shared/styles/theme';
import Button from '@/shared/ui/Button';
import { Kakao } from '@/shared/assets/svgs/icon';
import Flex from '@/shared/ui/Flex';
import { useGetGuestToken } from '@/entities/auth/api/useGetGuestToken';
import kakaoLogin from '@/entities/auth/lib/kakaoLogin';
import LoginEntranceView from './LoginEntranceView';
import * as S from './LoginPage.styles';

function LoginPage() {
  const { refetch: getGuestToken } = useGetGuestToken();
  const navigate = useNavigate();
  const [isEntrance, setIsEntrance] = useState(true);

  const handleLoginButtonClick = (loginType: 'KAKAO' | 'GUEST') => {
    const token = localStorage.getItem('accessToken');
    if (loginType === 'KAKAO') {
      kakaoLogin();
    } else if (!token) {
      getGuestToken();
    } else {
      navigate(ROUTE.onboarding);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntrance(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isEntrance) {
    return <LoginEntranceView />;
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
      <S.BottomWrapper>
        <Button
          style={{
            background: '#FEE500',
          }}
          onClick={() => handleLoginButtonClick('KAKAO')}
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
      </S.BottomWrapper>
    </Flex>
  );
}

export default LoginPage;

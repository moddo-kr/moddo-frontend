import LogoImg from '@/shared/assets/pngs/LogoImg.png';
import Text from '@/shared/ui/Text';
import { useNavigate, useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import theme from '@/shared/styles/theme';
import { Button } from '@/shared/design-system/ui';
import { Kakao } from '@/shared/assets/svgs/icon';
import Flex from '@/shared/ui/Flex';
import { getGuestToken } from '@/entities/auth/api/auth';
import { ROUTE } from '@/shared/config/route';
import kakaoLogin from '@/entities/auth/lib/kakaoLogin';
import { queryClient } from '@/shared/api/queryClient';
import { showToast } from '@/shared/ui/Toast';
import LoginEntranceView from './LoginEntranceView';
import * as S from './LoginPage.styles';

function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isEntrance, setIsEntrance] = useState(true);
  const [isGuestLoginPending, setIsGuestLoginPending] = useState(false);

  const handleLoginButtonClick = async (loginType: 'KAKAO' | 'GUEST') => {
    if (loginType === 'KAKAO') {
      const redirectPathAfterLogin =
        searchParams.get('redirectTo') ?? undefined;
      kakaoLogin(redirectPathAfterLogin);
    } else {
      if (isGuestLoginPending) return;
      setIsGuestLoginPending(true);
      try {
        await getGuestToken();
        queryClient.removeQueries({ queryKey: ['auth', 'user'] });
        navigate(ROUTE.selectGroup);
      } catch {
        showToast({
          type: 'error',
          content: '비회원 로그인에 실패했습니다. 다시 시도해주세요.',
        });
      } finally {
        setIsGuestLoginPending(false);
      }
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
          disabled={isGuestLoginPending}
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

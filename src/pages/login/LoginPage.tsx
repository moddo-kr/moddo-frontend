import { useNavigate, useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { showToast } from '@/shared/design-system/ui';
import { Kakao } from '@/shared/assets/svgs/icon';
import { getGuestToken } from '@/entities/auth/api/auth';
import { ROUTE } from '@/shared/config/route';
import kakaoLogin from '@/entities/auth/lib/kakaoLogin';
import { LogoIcon } from '@/shared/assets/svgs';
import { queryClient } from '@/shared/api/queryClient';
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
    <S.LoginPageLayout>
      <S.ContentWrapper>
        <S.TextContainer>
          <LogoIcon width={187} height={66} />
          <S.LogoTagline>모또와 함께라면 정산 걱정 끝!</S.LogoTagline>
        </S.TextContainer>
      </S.ContentWrapper>
      <S.BottomWrapper>
        <S.KakaoButton onClick={() => handleLoginButtonClick('KAKAO')}>
          <Kakao width={24} height={24} />
          <S.KakaoLoginLabel>카카오로 로그인</S.KakaoLoginLabel>
        </S.KakaoButton>
        <S.TextWrapper>
          <S.TermsNotice>회원가입 시 서비스 이용약관과</S.TermsNotice>
          <S.TermsNotice>
            개인정보 수집 및 이용에 동의하게 됩니다.
          </S.TermsNotice>
        </S.TextWrapper>
      </S.BottomWrapper>
    </S.LoginPageLayout>
  );
}

export default LoginPage;

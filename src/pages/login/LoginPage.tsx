import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import kakaoLogin from '@/entities/auth/lib/kakaoLogin';
import { LogoIcon, Kakao } from '@/shared/assets/svgs/logo';
import { PageLayout } from '@/shared/ui/PageLayout';
import LoginEntranceView from './LoginEntranceView';
import * as S from './LoginPage.styles';

function LoginPage() {
  const [searchParams] = useSearchParams();
  const [isEntrance, setIsEntrance] = useState(true);

  const handleKakaoLogin = () => {
    const redirectPathAfterLogin = searchParams.get('redirectTo') ?? undefined;
    kakaoLogin(redirectPathAfterLogin);
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
    <PageLayout>
      <S.LoginPageContent>
        <S.ContentWrapper>
          <S.TextContainer>
            <LogoIcon width={187} height={66} />
            <S.LogoTagline>모또와 함께라면 정산 걱정 끝!</S.LogoTagline>
          </S.TextContainer>
        </S.ContentWrapper>
        <S.BottomWrapper>
          <S.KakaoButton onClick={handleKakaoLogin}>
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
      </S.LoginPageContent>
    </PageLayout>
  );
}

export default LoginPage;

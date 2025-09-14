import Lottie from 'lottie-react';
import coin from '@/shared/assets/lottie/coin.json';
import Onboarding1 from '@/shared/assets/lottie/Onboarding_1.json';
import Onboarding2 from '@/shared/assets/lottie/Onboarding_2.json';
import Onboarding3 from '@/shared/assets/lottie/Onboarding_3.json';
import Onboarding4 from '@/shared/assets/lottie/Onboarding_4.json';
import * as S from './index.styles';

export function CoinLottie() {
  return (
    <S.Wrapper>
      <Lottie animationData={coin} />
    </S.Wrapper>
  );
}

export function OnboardingStep1Lottie() {
  return (
    <S.ExtendedWrapper>
      <Lottie animationData={Onboarding1} />
    </S.ExtendedWrapper>
  );
}

export function OnboardingStep2Lottie() {
  return (
    <S.OnboardingWrapper>
      <Lottie animationData={Onboarding2} />
    </S.OnboardingWrapper>
  );
}

export function OnboardingStep3Lottie() {
  return (
    <S.OnboardingWrapper>
      <Lottie animationData={Onboarding3} />
    </S.OnboardingWrapper>
  );
}

export function OnboardingStep4Lottie() {
  return (
    <S.OnboardingWrapper>
      <Lottie animationData={Onboarding4} />
    </S.OnboardingWrapper>
  );
}

import Lottie from 'lottie-react';
import coin from '@/assets/lottie/coin.json';
import Onboarding1 from '@/assets/lottie/Onboarding_1.json';
import Onboarding2 from '@/assets/lottie/Onboarding_2.json';
import Onboarding3 from '@/assets/lottie/Onboarding_3.json';
import Onboarding4 from '@/assets/lottie/Onboarding_4.json';
import * as S from './index.styles';

export const CoinLottie = () => {
  return (
    <S.Wrapper>
      <Lottie animationData={coin} />
    </S.Wrapper>
  );
};

export const OnboardingLottie1 = () => {
  return (
    <S.OnboardingWrapper>
      <Lottie animationData={Onboarding1} />
    </S.OnboardingWrapper>
  );
};

export const OnboardingLottie2 = () => {
  return (
    <S.Onboarding2Wrapper>
      <Lottie animationData={Onboarding2} />
    </S.Onboarding2Wrapper>
  );
};

export const OnboardingLottie3 = () => {
  return (
    <S.Onboarding2Wrapper>
      <Lottie animationData={Onboarding3} />
    </S.Onboarding2Wrapper>
  );
};

export const OnboardingLottie4 = () => {
  return (
    <S.Onboarding2Wrapper>
      <Lottie animationData={Onboarding4} />
    </S.Onboarding2Wrapper>
  );
};
